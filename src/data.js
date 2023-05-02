import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
