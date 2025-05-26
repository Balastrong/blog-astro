import { getAsset, getBlogPermalink, getPermalink } from '../utils/permalinks';

export * from './projects';
export * from './speaking.ts';
export * from './tanstack';

export const youTubeChannelUrl = 'https://www.youtube.com/@DevLeonardo';
export const youTubeChannelUrlSubscribe = youTubeChannelUrl + '?sub_confirmation=1';
export const twitterUrl = 'https://twitter.com/balastrong';
export const linkedinUrl = 'https://www.linkedin.com/in/leonardo-montini/';
export const blueskyUrl = 'https://bsky.app/profile/leonardomontini.dev';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Open Source',
      links: [
        {
          text: 'Contributions',
          href: getPermalink('/contributions'),
        },
        {
          text: 'My Projects',
          href: getPermalink('/projects'),
        },
        {
          text: 'Community Projects',
          href: getPermalink('/community-projects'),
        },
      ],
    },
    {
      text: 'TanStack',
      href: getPermalink('/tanstack'),
    },
    {
      text: 'Speaking',
      href: getPermalink('/speaking'),
    },
  ],
  actions: [{ type: 'button', text: 'YouTube', href: youTubeChannelUrlSubscribe }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: youTubeChannelUrlSubscribe },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: blueskyUrl },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: linkedinUrl },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/bqwyEa6We6' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Balastrong' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: twitterUrl },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};

export const seriesNames = {
  'copilot-x': 'Copilot X',
  'tanstack-router': 'TanStack Router',
};
