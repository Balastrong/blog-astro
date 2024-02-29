import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { cleanSlug, trimSlash, POST_PERMALINK_PATTERN } from './permalinks';
import { seriesNames } from '~/data';

const generatePermalink = async ({ id, slug, publishDate, series }) => {
  const year = String(publishDate.getFullYear()).padStart(4, '0');
  const month = String(publishDate.getMonth() + 1).padStart(2, '0');
  const day = String(publishDate.getDate()).padStart(2, '0');
  const hour = String(publishDate.getHours()).padStart(2, '0');
  const minute = String(publishDate.getMinutes()).padStart(2, '0');
  const second = String(publishDate.getSeconds()).padStart(2, '0');

  const permalink = POST_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%series%', series || '')
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedPost = async (post: CollectionEntry<'post'>): Promise<Post> => {
  const { id, slug: rawSlug = '', data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();

  const youtubeId = post.body.match(/<YouTube.*?id="(.*?)".*?>/g)?.map((match) => match.match(/id="(.*?)"/)?.[1])?.[0];

  const {
    tags: rawTags = [],
    series: rawSeries,
    author = 'Anonymous',
    publishDate: rawPublishDate = new Date(),
    ...rest
  } = data;

  const slug = cleanSlug(rawSlug.split('/').pop());
  const publishDate = new Date(rawPublishDate);
  const series = rawSeries ? cleanSlug(rawSeries) : undefined;
  const tags = rawTags.map((tag: string) => cleanSlug(tag));

  return {
    id,
    slug,
    publishDate,
    series,
    seriesName: getSeriesName(series),
    tags,
    author,
    youtubeId,

    ...rest,

    Content,
    // or 'body' in case you consume from API

    permalink: await generatePermalink({ id, slug, publishDate, series }),
    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};

const load = async function (): Promise<Post[]> {
  const posts = await getCollection('post');
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));

  const results = (await Promise.all(normalizedPosts))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((post) => !post.draft);

  return results;
};

let _posts: Post[];
let _series: Map<string, Post[]>;

/** */
export const fetchPosts = async (): Promise<Post[]> => {
  if (!_posts) {
    _posts = await load();
  }

  return _posts;
};

/** */
export const findPostsBySlugs = async (slugs: string[]): Promise<Post[]> => {
  if (!Array.isArray(slugs)) return [];

  const posts = await fetchPosts();

  return slugs.reduce(function (r: Post[], slug: string) {
    posts.some(function (post: Post) {
      return slug === post.slug && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findPostsByIds = async (ids: string[]): Promise<Post[]> => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r: Post[], id: string) {
    posts.some(function (post: Post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};

export const findPostsInSeries = (series?: string): Post[] => {
  if (!series) return [];

  if (!_series) {
    _series = new Map<string, Post[]>();
    _posts.forEach((post) => {
      if (!post.series) return;
      const series = post.series;
      const seriesPosts = _series.get(series) || [];
      seriesPosts.push(post);
      _series.set(series, seriesPosts);
    });
  }

  const foundSeries = _series.get(series);

  if (!foundSeries) return [];

  return foundSeries.sort((a, b) => a.publishDate.valueOf() - b.publishDate.valueOf());
};

/** */
export const findLatestPosts = async ({ count }: { count?: number }): Promise<Post[]> => {
  const _count = count || 4;
  const posts = await fetchPosts();

  return posts ? posts.slice(0, _count) : [];
};

export const findSimilarPosts = (post: Post, config?: { count?: number }): Post[] => {
  const _count = config?.count || 3;

  return _posts
    .filter((p) => p.id !== post.id && !!p.image)
    .map((p) => {
      const score =
        p.tags?.reduce((acc, tag) => {
          if (post.tags?.includes(tag)) {
            acc += 1;
          }
          return acc;
        }, 0) ?? 0;
      return {
        p,
        score: score,
      };
    })
    .sort((a, b) => b.score - a.score)
    .map((p) => p.p)
    .slice(0, _count);
};

export const getSeriesName = (series?: string): string => (series ? seriesNames[series] || series : '');

type TransitionName = 'image' | 'title' | 'description';
export const getTransitionName = (post: Pick<Post, 'title'>, prefix: TransitionName): string =>
  `${prefix}-${post.title.replace(/\s/g, '-').toLowerCase()}`;

export const getPostsCount = async (): Promise<number> => {
  const posts = await fetchPosts();
  return posts.length;
};
