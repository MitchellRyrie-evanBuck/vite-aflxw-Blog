<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../../ui/navigation-menu';
import { Badge as BadgeCom } from '../../ui/badge'

import { useData } from 'vitepress';
import { Twitter, Github, Youtube, Badge } from 'lucide-vue-next';
import NavItems from './NavItems.vue';

const { site, theme } = useData();
console.log(site.value, 'site');
console.log(theme.value, 'theme');

const socialLinks = theme.value.socialLinks || [];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'github':
      return Github;
    case 'twitter':
      return Twitter;
    case 'youtube':
      return Youtube;
    default:
      return Badge;
  }
};
</script>

<template>
  <div class="custom-nav dark:bg-black">
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between h-16">
        <!-- Logo 区域 -->
        <div class="flex items-center">
          <img :src="(theme as any).logo" alt="logo" class="w-8 h-8" />
          <span class="ml-2 text-xl font-bold">{{ (site as any).title }}</span>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem
              v-for="(item, index) in (theme as any).nav"
              :key="index"
            >
              <template v-if="!item.items || item.items.length === 0">
                <NavigationMenuLink
                  :href="item.link"
                  :class="navigationMenuTriggerStyle()"
                >
                  {{ item.text }}
                </NavigationMenuLink>
              </template>
              <template v-else>
                <NavigationMenuTrigger>{{ item.text }}</NavigationMenuTrigger>
                <NavigationMenuContent
                >
                  <div
                    class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2"
                    
                  >
                    <div v-for="component in item.items" :key="component.link">
                        <div
                          class="block p-3 space-y-1 "
                        >
                          <div class="text-sm font-medium leading-none">
                            {{ component.text }}
                          </div>
                        </div>
                      <!-- 递归渲染子项 -->
                      <template
                        v-if="component.items && component.items.length > 0"
                      >
                      <div
                      class="flex flex-wrap"
                      >
                        <NavItems :items="component.items" />

                      </div>
                      </template>
                    </div>
                  </div>
                </NavigationMenuContent>
              </template>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div class="flex justify-center">
          <a
            v-for="link in socialLinks"
            :key="link.link"
            :href="link.link"
            target="_blank"
            rel="noopener noreferrer"
            class="px-2"
          >
            <component
              :is="getIconComponent(link.icon)"
              class="icon"
              :size="18"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.custom-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  backdrop-filter: saturate(20%) blur(10px);
  --globalnav-backdrop-filter: saturate(100%) blur(10px);
  --globalnav-background: rgba(255, 255, 255, 0.8) ;
  backdrop-filter: var(--globalnav-backdrop-filter);
  background: var(--globalnav-background);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.01);
  z-index: 10001;
  color: rgb(38, 38, 39);
  transition: all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
}
</style>
