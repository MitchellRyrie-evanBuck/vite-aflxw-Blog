// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import CustomHome from "../components/CustomHome.vue"
import CustomNav from "../components/CustomNav.vue"

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 'layout-top': () => h(CustomNav)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('CustomHome', CustomHome);
  }
}
