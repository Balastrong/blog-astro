import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { GitHubRepo } from './types';

export const youTubeChannelUrl = 'https://www.youtube.com/@DevLeonardo';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Video',
      href: getPermalink('#video'),
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
      ],
    },
  ],
  actions: [{ type: 'button', text: 'YouTube', href: youTubeChannelUrl }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/balastrong' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: youTubeChannelUrl },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/leonardo-montini/' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/bqwyEa6We6' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Balastrong' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};

export const openSourceProjects: GitHubRepo[] = [
  {
    owner: 'Microsoft',
    repo: 'vscode',
  },
  {
    owner: 'qwikifiers',
    repo: 'qwik-ui',
  },
  {
    owner: 'Microsoft',
    repo: 'vscode-pull-request-github',
  },
  {
    owner: 'colinhacks',
    repo: 'zod',
  },
  {
    owner: 'Schrodinger-Hat',
    repo: 'osday-2023',
  },
  {
    owner: 'Microsoft',
    repo: 'vscode-js-debug',
  },
];

export const myProjects: GitHubRepo[] = [
  'chess-stats-action',
  'close-tabs',
  'trello-card-numbers-plus',
  'wrand',
  'blog',
  'blog-astro',
].map((repo) => ({
  owner: 'Balastrong',
  repo,
}));
