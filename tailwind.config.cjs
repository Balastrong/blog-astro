const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
    transform: (content) => content.replace(/taos:/g, ''),
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        opacity: {
          '0%': { opacity: '0' },
          '30%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        opacity: 'opacity 2s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addBase }) => {
      addBase({
        ['html.js :where([class*="taos:"]:not(.taos-init))']: {
          visibility: 'hidden',
        },
      });
    }),
  ],
  darkMode: 'class',
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
    {
      pattern: /^(bg|text|border)-(cyan|emerald|yellow|zinc)-(500|600)$/,
    },
    {
      pattern: /^(from|to)-(cyan|emerald|yellow|zinc)-(500|500\/30|500\/15)$/,
    },
  ],
};
