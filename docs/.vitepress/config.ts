import { defineConfig } from 'vitepress'
import { navbarZh } from './nav'
import { sidebarZh } from './sidebar'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XL We Blog",
  description: "Where there is a will, there is a way",
  lastUpdated: true,
  cleanUrls: true,
  base: "/",




  themeConfig: {
    nav: navbarZh,
    sidebar: sidebarZh,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
