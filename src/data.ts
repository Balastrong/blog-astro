import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { GitHubRepo } from './types';

export const headerData = {
  links: [
    /*{
      text: 'Pages',
      links: [
        {
          text: 'Features',
          href: '#',
        },
      ],
    },*/
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Video',
      href: getPermalink(),
    },
    {
      text: 'Open Source',
      href: getPermalink('/open-source'),
    },
    {
      text: 'My Projects',
      href: getPermalink('/projects'),
    },
  ],
  actions: [{ type: 'button', text: 'YouTube', href: 'https://www.youtube.com/@DevLeonardo' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/balastrong' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@DevLeonardo' },
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
  'close-tabs',
  'chess-stats-action',
  'trello-card-numbers-plus',
  'wrand',
  'blog',
  'blog-astro',
].map((repo) => ({
  owner: 'Balastrong',
  repo,
}));
