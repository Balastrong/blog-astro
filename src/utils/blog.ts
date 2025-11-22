import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { cleanSlug, trimSlash, POST_PERMALINK_PATTERN } from './permalinks';
import { seriesNames } from '~/data';
import { LANGUAGES, type Language } from '~/content/config';

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

const getLanguageFromId = (id: string): Language => {
  const match = id.match(/\.([a-z]{2})\.(md|mdx)$/);
  const lang = match ? match[1] : 'en';

  if (!LANGUAGES.includes(lang as Language)) {
    throw new Error(`Unsupported language code: ${lang} in post id: ${id}`);
  }

  return lang as Language;
};

const getNormalizedPost = async (post: CollectionEntry<'post'>): Promise<Post> => {
  const { id, slug: rawSlug, data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();

  const language = getLanguageFromId(id);

  const youtubeId = post.body.match(/<YouTube.*?id="(.*?)".*?>/g)?.map((match) => match.match(/id="(.*?)"/)?.[1])?.[0];

  const {
    tags: rawTags = [],
    series: rawSeries,
    author = 'Leonardo Montini',
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
    language,

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

  const groupedPosts: Record<string, Post[]> = {};
  results.forEach((post) => {
    const id = post.id;
    const groupSlug = id
      .replace(/\.(md|mdx)$/, '')
      .replace(/\.([a-z]{2})$/, '')
      .replace(/\/index$/, '');

    if (!groupedPosts[groupSlug]) {
      groupedPosts[groupSlug] = [];
    }
    groupedPosts[groupSlug].push(post);
  });

  Object.values(groupedPosts).forEach((group) => {
    if (group.length > 1) {
      const translations = group.reduce((acc, p) => {
        acc[p.language] = p.permalink || p.slug;
        return acc;
      }, {} as Record<string, string>);

      group.forEach((p) => {
        p.translations = translations;
      });
    }
  });

  return results;
};

let _posts: Post[];
let _series: Map<string, Post[]>;

/** */
export const fetchPosts = async (language: Post['language'] | 'all' = 'en'): Promise<Post[]> => {
  if (!_posts) {
    _posts = await load();
  }

  return language === 'all' ? _posts : _posts.filter((post) => post.language === language);
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
          if (post.language === p.language) {
            acc += 10;
          }
          return acc;
        }, 0) ?? 0;
      return { p, score };
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
