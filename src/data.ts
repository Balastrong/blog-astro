import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { type GitHubRepo, type Tutorial } from './types';

export const youTubeChannelUrl = 'https://www.youtube.com/@DevLeonardo';
export const youTubeChannelUrlSubscribe = youTubeChannelUrl + '?sub_confirmation=1';
export const twitterUrl = 'https://twitter.com/balastrong';
export const linkedinUrl = 'https://www.linkedin.com/in/leonardo-montini/';

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
  ],
  actions: [{ type: 'button', text: 'YouTube', href: youTubeChannelUrlSubscribe }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: twitterUrl },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: youTubeChannelUrlSubscribe },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: linkedinUrl },
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
    owner: 'BuilderIO',
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
    owner: 'TanStack',
    repo: 'router',
  },
  {
    owner: 'TanStack',
    repo: 'form',
  },
  {
    owner: 'TanStack',
    repo: 'tanstack.com',
  },
];

export const myProjects: GitHubRepo[] = [
  'chess-stats-action',
  'close-tabs',
  'trello-card-numbers-plus',
  'wrand',
  'blog-astro',
].map((repo) => ({
  owner: 'Balastrong',
  repo,
}));

export const communityProjects: GitHubRepo[] = [
  { owner: 'Balastrong', repo: 'myntenance' },
  { owner: 'DevLeonardoCommunity', repo: 'github-stats' },
  { owner: 'DevLeonardoCommunity', repo: 'billsplit' },
];

export const seriesNames = {
  'copilot-x': 'Copilot X',
  'tanstack-router': 'TanStack Router',
};

export const tanStackTutorials: Tutorial[] = [
  {
    key: 'start',
    title: 'TanStack Start',
    mainColor: 'cyan-500',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLOQjd5dsGSxIEKFg4dnSQ4zQkmTktfszp',
    chapters: [
      {
        title: 'Project Setup',
        video: 'https://youtu.be/PUf8DzCvrdc',
        code: 'https://github.com/Balastrong/tanstack-start-demo/tree/01-project-setup',
      },
      {
        title: 'Server Function Validators',
        code: 'https://github.com/Balastrong/tanstack-start-demo/tree/02-server-function-validator',
      },
    ],
  },
  {
    key: 'router',
    title: 'TanStack Router',
    mainColor: 'emerald-500',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLOQjd5dsGSxJilh0lBofeY8Qib98kzmF5',
    chapters: [
      {
        title: 'Setup & Navigation',
        video: 'https://youtu.be/4sslBg8LprE',
        code: 'https://github.com/Balastrong/tanstack-router-demo/tree/01-routes-and-setup',
        article: 'https://dev.to/this-is-learning/tanstack-router-setup-routing-in-react-4gf7',
      },
      {
        title: 'Path Parameters & Loaders',
        video: 'https://youtu.be/xUrbLlcrIXY',
        code: 'https://github.com/Balastrong/tanstack-router-demo/tree/01-routes-and-setup',
        article: 'https://dev.to/this-is-learning/tanstack-router-path-parameters-loader-1h84',
      },
      {
        title: 'Query Parameters & Validation',
        video: 'https://youtu.be/fE0CeXZF7CY',
        code: 'https://github.com/Balastrong/tanstack-router-demo/tree/03-query-parameters',
        article: 'https://dev.to/this-is-learning/tanstack-router-query-parameters-validators-4ijg',
      },
      {
        title: 'Authenticated Routes (Guards)',
        video: 'https://youtu.be/O6dS0_IvvK0',
        code: 'https://github.com/Balastrong/tanstack-router-demo/tree/04-authenticated-routes',
        article: 'https://dev.to/this-is-learning/tanstack-router-authenticated-routes-guards-3obp',
      },
      {
        title: 'Layout Sharing/Nesting & Custom 404',
        video: 'https://youtu.be/48JS96u6GDc',
        code: 'https://github.com/Balastrong/tanstack-router-demo/tree/05-nested-routes',
        article: 'https://dev.to/this-is-learning/tanstack-router-nesting-404-pages-36f9',
      },
      {
        title: 'Code Based Routing',
        video: 'https://youtu.be/HKS9gLHhz2s',
        code: 'https://github.com/Balastrong/tanstack-router-code-based-demo',
      },
      {
        title: 'Block navigation with unsaved changes',
        video: 'https://youtu.be/1yuvNOKb8S8',
        code: 'https://github.com/Balastrong/tanstack-router-demo/tree/07-navigation-blocking',
      },
      {
        title: 'React Route/Location Masking',
        video: 'https://youtu.be/yTx7zYpq4ok',
        code: 'https://github.com/Balastrong/tanstack-router-demo/tree/08-route-masking',
      },
    ],
  },
  {
    key: 'form',
    title: 'TanStack Form',
    mainColor: 'yellow-500',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLOQjd5dsGSxInTKUWTxyqSKwZCjDIUs0Y',
    chapters: [
      {
        title: 'Basic Form Validation',
        video: 'https://youtu.be/Pf1qn35bgjs',
        code: 'https://github.com/Balastrong/tanstack-form-demo/tree/01-setup-simple-validation',
        article: 'https://dev.to/this-is-learning/tanstack-form-setup-and-simple-validation-with-shadcnui-1al',
      },
      {
        title: 'Advanced Form Validation',
        video: 'https://youtu.be/Pys2ExswZT0',
        code: 'https://github.com/Balastrong/tanstack-form-demo/tree/02-advanced-validation',
        article: 'https://dev.to/this-is-learning/tanstack-form-tutorial-advanced-validation-41hc',
      },
      {
        title: 'Arrays & Dynamic Fields',
        video: 'https://youtu.be/0IPPHdjvrzk',
        code: 'https://github.com/Balastrong/tanstack-form-demo/tree/03-dynamic-arrays',
        article: 'https://dev.to/this-is-learning/tanstack-form-tutorial-arrays-dynamic-fields-5b25',
      },
      {
        title: 'Deep dive on values reactivity',
        video: 'https://youtu.be/UXRZvNCnE-s',
        code: 'https://github.com/Balastrong/tanstack-form-demo/tree/04-reactivity',
      },
      {
        title: 'Form Validation with zod',
        video: 'https://youtu.be/HSboMHfPuZA',
        code: 'https://github.com/Balastrong/tanstack-form-demo/tree/05-zod-validation',
      },
      {
        title: 'Side Effects & Listeners',
        video: 'https://youtu.be/A-w2IG7DAso',
        code: 'https://github.com/Balastrong/tanstack-form-demo/tree/06-field-listeners',
      },
    ],
  },
  {
    key: 'ecosystem',
    title: 'TanStack Ecosystem',
    mainColor: 'zinc-500',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLOQjd5dsGSxKaQ-2Wf3Mwp4PTu7NXYIM6',
    chapters: [
      {
        title: 'Backend Pagination, Filter & Sort with Table + Query + Router',
        video: 'https://youtu.be/F4zshDInsJY',
        code: 'https://github.com/Balastrong/tanstack-filtered-table-demo',
      },
      {
        title: 'How TanStack releases multiple times a day',
        video: 'https://youtu.be/ILa_5QVJocA',
      },
    ],
  },
];
