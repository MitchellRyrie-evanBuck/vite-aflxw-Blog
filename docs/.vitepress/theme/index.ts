// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
import './css/style.css';
import './css/tailwind.css';
import './css/custom.css';

import CustomHome from '../components/CustomHome.vue';
import CustomNav from '../components/custom/navigation/CustomNav.vue';
import { EnhanceAppContext } from 'vitepress';
// import { plugin as shadcnPlugin } from './shadcn'
import { MotionPlugin } from '@vueuse/motion'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-top': () => h(CustomNav),
    });
  },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    console.log('router', router);
    console.log('siteData', siteData);
    app.use(MotionPlugin)
    // ...
    app.component('CustomHome', CustomHome);
  },
};
