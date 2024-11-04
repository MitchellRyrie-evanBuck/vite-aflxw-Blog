// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './css/style.css'
import './css/tailwind.css'

import CustomHome from "../components/CustomHome.vue"
import CustomNav from "../components/CustomNav.vue"
import { EnhanceAppContext } from 'vitepress'
// import { plugin as shadcnPlugin } from './shadcn'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-top': () => h(CustomNav)
    })
  },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // ...
    app.component('CustomHome', CustomHome);
  }
}
