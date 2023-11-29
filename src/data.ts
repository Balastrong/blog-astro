import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { GitHubRepo } from './types';

export const youTubeChannelUrl = 'https://www.youtube.com/@DevLeonardo';
export const twitterUrl = 'https://twitter.com/balastrong';

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
  actions: [{ type: 'button', text: 'YouTube', href: youTubeChannelUrl + '?sub_confirmation=1' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: twitterUrl },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: youTubeChannelUrl + '?sub_confirmation=1' },
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
    owner: 'oramasearch',
    repo: 'orama',
  },
  {
    owner: 'Microsoft',
    repo: 'vscode-js-debug',
  },
  {
    owner: 'EddieHubCommunity',
    repo: 'LinkFree',
  },
];

export const myProjects: GitHubRepo[] = [
  'chess-stats-action',
  'close-tabs',
  'trello-card-numbers-plus',
  'wrand',
  'github-stats',
  'blog-astro',
].map((repo) => ({
  owner: 'Balastrong',
  repo,
}));

export const seriesNames = {
  'copilot-x': 'Copilot X',
};
