import rss from '@astrojs/rss';

import { SITE, BLOG } from '~/config.mjs';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
  if (BLOG.disabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  return rss({
    title: `${SITE.name}’s Blog`,
    description: SITE.description,
    site: import.meta.env.SITE,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData: `<language>en-us</language>
    <atom:link href="${SITE.origin}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.description,
      pubDate: post.publishDate,
      author: post.author ?? 'Leonardo Montini',
      categories: post.tags,
    })),

    trailingSlash: SITE.trailingSlash,
  });
};
