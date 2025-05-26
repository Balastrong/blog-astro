import type { GitHubRepo } from '~/types';

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
    owner: 'QwikDev',
    repo: 'qwik',
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
    owner: 'Schroedinger-Hat',
    repo: 'osday',
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
    owner: 'TanStack',
    repo: 'router',
  },
  {
    owner: 'TanStack',
    repo: 'table',
  },
  {
    owner: 'TanStack',
    repo: 'form',
  },
  {
    owner: 'TanStack',
    repo: 'tanstack.com',
  },
  {
    owner: 'spartan-ng',
    repo: 'spartan',
  },
];

export const myProjects: GitHubRepo[] = [
  'chess-stats-action',
  'close-tabs',
  'trello-card-numbers-plus',
  'shadcn-autocomplete-demo',
  'blog-astro',
  'confhub',
  'awesome-tanstack-start',
].map((repo) => ({
  owner: 'Balastrong',
  repo,
}));

export const communityProjects: GitHubRepo[] = [
  { owner: 'Balastrong', repo: 'myntenance' },
  { owner: 'DevLeonardoCommunity', repo: 'github-stats' },
  { owner: 'DevLeonardoCommunity', repo: 'billsplit' },
];
