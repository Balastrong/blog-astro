import { type GitHubRepo, type SpeakingSession, type Tutorial } from './types';
import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';

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
        video: 'https://youtu.be/pARSOmKcQ-c',
        code: 'https://github.com/Balastrong/tanstack-start-demo/tree/02-server-function-validator',
      },
      {
        title: 'Server Function Errors & Responses',
        soon: true,
      },
      {
        title: 'Integrating Convex (backend) & Clerk (auth)',
        video: 'https://youtu.be/RXDYqoO7V6w',
        code: 'https://github.com/Balastrong/kickstart',
      },
      {
        title: 'Authentication with Supabase',
        video: 'https://youtu.be/6c8kuvBolQg',
        code: 'https://github.com/Balastrong/confhub',
      },
      {
        title: 'SSR, Preloading, Caching and more with Start + Query',
        video: 'https://youtu.be/kgw83CziJgM',
      },
      {
        title: 'Themes & Dark Mode',
        soon: true,
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
      {
        title: 'Custom Link Element',
        video: 'https://youtu.be/-kmf3ZYlduU',
        code: 'https://github.com/Balastrong/tanstack-router-demo/tree/09-custom-link',
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
      {
        title: 'Composable Fields for Large Forms',
        video: 'https://youtu.be/YJ3rW85fnKo',
        code: 'https://github.com/Balastrong/tanstack-form-demo/tree/07-form-composition',
      },
      {
        title: 'Standard Schema Validators',
        video: 'https://youtu.be/_JDf5_wVujo',
      },
      {
        title: 'Custom Validators',
        soon: true,
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
      {
        title: 'A new tool to Create React Apps with TanStack',
        video: 'https://youtu.be/K2m5awz3cAk',
      },
      {
        title: 'How we unit test Typescript types in TanStack',
        video: 'https://youtu.be/pKvebYHH3x4',
      },
      {
        title: 'TanStack Store',
        soon: true,
      },
    ],
  },
];

// TODO: Might want to replace mode with location as "online" | string
export const speakingSessions: SpeakingSession[] = [
  {
    date: '2023-07-04',
    title: 'Open Source: non è un paese per scrocconi',
    event: 'DevMy - YouTube',
    type: 'interview',
    mode: 'remote',
    language: '🇮🇹',
    eventUrl: 'https://www.youtube.com/@Devmy',
    recording: 'https://www.youtube.com/watch?v=LyR9nvjXNzI',
  },
  {
    date: '2023-10-23',
    title: "L'importante è partecipare",
    event: 'Continous Delivery Podcast',
    type: 'interview',
    mode: 'remote',
    language: '🇮🇹',
    eventUrl: 'https://www.youtube.com/@ContinuousDeliverySpark',
    recording: 'https://www.youtube.com/watch?v=4s-rDXEjArw',
  },
  {
    date: '2024-02-12',
    title: "Come si diventa una GitHub Star (e crescere con l'Open Source)",
    event: 'Giuppi - YouTube',
    type: 'interview',
    mode: 'remote',
    language: '🇮🇹',
    eventUrl: 'https://www.youtube.com/@giuppidev',
    recording: 'https://www.youtube.com/watch?v=UHf5WJzgSwA',
  },
  {
    date: '2024-09-24',
    title: 'Il futuro di React è questo? TANSTACK 🔥',
    event: 'Giuppi - YouTube',
    type: 'interview',
    mode: 'remote',
    language: '🇮🇹',
    eventUrl: 'https://www.youtube.com/@giuppidev',
    recording: 'https://www.youtube.com/watch?v=WBwodqVUmWs',
  },
  {
    date: '2024-10-14',
    title: 'Provo un nuovo framework per React 🚀',
    event: 'Giuppi - YouTube',
    type: 'interview',
    mode: 'remote',
    language: '🇮🇹',
    eventUrl: 'https://www.youtube.com/@giuppidev',
    recording: 'https://www.youtube.com/watch?v=SU-ncWr4UTQ',
  },
  {
    date: '2024-10-30',
    title: 'GitHub Best Practices',
    event: 'Salottino Tech - Manuel Zavatta YouTube',
    type: 'interview',
    mode: 'remote',
    language: '🇮🇹',
    eventUrl: 'https://www.youtube.com/@Zavy86',
    recording: 'https://www.youtube.com/watch?v=n7f22yU3GFQ',
  },
  {
    date: '2024-08-06',
    title: 'TanStack Router: Navigare tra le pagine di una Single Page Application',
    event: 'Quattro Dev e un Meetup',
    mode: 'in-person',
    language: '🇮🇹',
    type: 'session',
  },
  {
    date: '2024-10-23',
    title: 'How GitHub Copilot is assisting my flight, until it takes full control',
    event: 'Codemotion Milan 2024',
    type: 'session',
    mode: 'in-person',
    language: '🇬🇧',
    eventUrl: 'https://conferences.codemotion.com/milan2024/it/home/',
  },
  {
    date: '2025-01-22',
    title: 'Se GitHub l’ha chiamato Copilot, un motivo ci sarà',
    event: 'AI per Systems Engineer e Developer, verso un futuro co-creato',
    type: 'session',
    mode: 'in-person',
    language: '🇮🇹',
    eventUrl:
      'https://www.eventbrite.it/e/biglietti-ai-per-systems-engineer-e-developer-verso-un-futuro-co-creato-1119103291069',
    recording: 'https://youtu.be/T8xYVyhvO_Q',
    image: 'copilot-macerata.png',
  },
  {
    date: '2025-02-06',
    title: 'Securing APIs: Techniques and Best Practices for Security',
    event: 'Claranet - Software Engineering Days',
    type: 'session',
    mode: 'remote',
    language: '🇬🇧',
    eventUrl: 'https://academy.claranet.it/pages/software-engineering-secure-api',
  },
  {
    date: '2025-03-21',
    title: 'Learning (Web) Development through Open Source',
    event: 'Open Source Day 2025',
    type: 'session',
    mode: 'in-person',
    language: '🇬🇧',
    eventUrl: 'https://osday.dev/schedule/d8326b1b-34a3-4027-8ed0-077c1d13dbb3',
    recording: 'https://www.youtube.com/live/_IdH5YTBAGs?si=SylYiwsmBHeCvohy&t=29902',
    image: 'osday.png',
  },
  {
    date: '2025-03-25',
    title: 'GitHub Copilot: vediamo chi comanda',
    event: 'Commit University',
    type: 'session',
    mode: 'in-person',
    language: '🇮🇹',
    eventUrl: 'https://www.commitsoftware.it/commit-university/',
    image: 'copilot-commit.jpg',
  },
  {
    date: '2025-03-26',
    title: 'GitHub Copilot: vediamo chi comanda',
    event: 'Dilaxia Xplora',
    type: 'session',
    mode: 'in-person',
    language: '🇮🇹',
    eventUrl: 'https://www.dilaxia.com/blog/github-copilot-vediamo-chi-comanda',
    image: 'copilot-dilaxia.jpg',
  },
  {
    date: '2025-03-27',
    title: 'Frontend Rendering: How to Not Mess with SPAs, SSR & Friends',
    event: 'Claranet - Software Engineering Days',
    type: 'session',
    mode: 'remote',
    language: '🇬🇧',
    eventUrl: 'https://academy.claranet.it/pages/frontend-rendering-software-engineering-days',
  },
];
