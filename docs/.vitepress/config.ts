process.env.VITE_EXTRA_EXTENSIONS = 'crx';

import { defineConfig, defineConfigWithTheme } from 'vitepress';
import { navbarZh } from './nav';
import { sidebarZh } from './sidebar';
import { fileURLToPath } from 'url';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mitchell Ryrie Blog',
  description: 'Where there is a will, there is a way',
  lastUpdated: true,
  cleanUrls: true,
  base: '/',
  // scrollOffset: 'header',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    config: md => {
      // md.use(headerPlugin)
    },
  },

  themeConfig: {
    nav: navbarZh,
    sidebar: sidebarZh,
    logo: '/king-monster.svg',
    aside: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      {
        icon: 'youtube',
        link: '...',
        ariaLabel: 'cool link',
      },
    ],
    // algolia: {
    //   indexName: 'Notebook',
    //   appId: '3II0BF621L',
    //   apiKey: 'f0f82443dd1e3bb2738c4e904221fc97',
    //   searchParameters: {
    //     facetFilters: ['version:v3']
    //   }
    // },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    editLink: {
      pattern: 'vuejs/docs',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present af-xw',
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          // Less 配置选项
          javascriptEnabled: true,
          // 如果需要全局变量
          additionalData: `@import "docs/.vitepress/theme/variables.less";`,
        },
      },
    },
  },
});
