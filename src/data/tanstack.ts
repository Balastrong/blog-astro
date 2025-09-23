import type { Tutorial } from '~/types';

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
        title: 'Middleware',
        video: 'https://youtu.be/L1j7NQGsy0c',
      },
      {
        title: 'Integrating Convex (backend) & Clerk (auth)',
        video: 'https://youtu.be/RXDYqoO7V6w',
        code: 'https://github.com/Balastrong/kickstart',
      },
      {
        title: 'Authentication with Supabase',
        video: 'https://youtu.be/6c8kuvBolQg',
        code: 'https://github.com/Balastrong/confhub/tree/dc79c9f8fd2a4fb621e2b7029bb0e8dd202d6eb6',
      },
      {
        title: 'SSR, Preloading, Caching and more with Start + Query',
        video: 'https://youtu.be/kgw83CziJgM',
      },
      {
        title: 'Authentication with Better Auth and Drizzle ORM',
        video: 'https://youtu.be/o1l_jL_g9tw',
        code: 'https://github.com/Balastrong/confhub',
      },
      {
        title: 'Themes & Dark Mode',
        video: 'https://youtu.be/NoxvbjkyLAg',
        code: 'https://github.com/Balastrong/start-theme-demo',
      },
      {
        title: 'Localization with i18next',
        video: 'https://youtu.be/w80x52dvrGQ',
        code: 'https://github.com/Balastrong/confhub',
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
      {
        title: 'Go to Previous page on Sign In',
        video: 'https://youtu.be/MXffKeNfOvQ',
        code: 'https://github.com/Balastrong/confhub',
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
