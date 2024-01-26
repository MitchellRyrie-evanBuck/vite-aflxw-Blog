import { defineConfig, defineConfigWithTheme } from 'vitepress'
import { navbarZh } from './nav'
import { sidebarZh } from './sidebar'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XL We Blog",
  description: "Where there is a will, there is a way",
  lastUpdated: true,
  cleanUrls: true,
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
    'link',
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ]
  ],

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {

    }
  },


  themeConfig: {
    nav: navbarZh,
    sidebar: sidebarZh,
    logo: '/bird.png',
    aside: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: 'youtube',
        link: '...',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      },
      {
        icon: "mastodon",
        link: "https://mastodon.social/@af_xw",
      }
    ],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present af-xw'
    }
  }
})
