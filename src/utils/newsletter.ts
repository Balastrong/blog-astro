import { getCollection, type CollectionEntry } from 'astro:content';
import type { NewsletterIssue } from '~/types';

const getNormalizedPost = async (issue: CollectionEntry<'newsletter'>): Promise<NewsletterIssue> => {
  const { id: rawId, data } = issue;
  const { Content, remarkPluginFrontmatter } = await issue.render();

  const { publishDate: rawPublishDate = new Date(), ...rest } = data;

  const publishDate = new Date(rawPublishDate);

  const id = +rawId.split('.')[0];

  if (isNaN(id)) {
    throw new Error(`Invalid newsletter issue ID: ${rawId}`);
  }

  return {
    id,
    publishDate,
    ...rest,
    Content,
    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};

const load = async function (): Promise<NewsletterIssue[]> {
  const posts = await getCollection('newsletter');
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));

  const results = (await Promise.all(normalizedPosts))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((post) => !post.draft);

  return results;
};

let _issues: NewsletterIssue[];

/** */
export const fetchNewsletterIssues = async (): Promise<NewsletterIssue[]> => {
  if (!_issues) {
    _issues = await load();
  }

  return _issues;
};
