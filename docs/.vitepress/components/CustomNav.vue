<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import { useData } from 'vitepress'
import { Twitter, Github, Youtube, Badge } from 'lucide-vue-next'
const { site, theme } = useData()
console.log(site.value, 'site')
console.log(theme.value, 'theme')

const socialLinks = theme.value.socialLinks || []

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'github':
      return Github
    case 'twitter':
      return Twitter
    case 'youtube':
      return Youtube
    default:
      return Badge
  }
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]
</script>

<template>
  <div class="w-full bg-white custom-nav dark:bg-gray-800">
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between h-16">
        <!-- Logo 区域 -->
        <div class="flex items-center">
          <img :src="(theme as any).logo" alt="logo" class="w-8 h-8" />
          <span class="ml-2 text-xl font-bold">{{ (site as any).title }}</span>
        </div>

        <!-- 导航链接 -->
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
                >
                  <li class="row-span-3">
                    <NavigationMenuLink as-child>
                      <a
                        class="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                        href="/"
                      >
                        <img
                          src="https://www.radix-vue.com/logo.svg"
                          class="w-6 h-6"
                        />
                        <div class="mt-4 mb-2 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p class="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink as-child>
                      <a
                        href="/docs/introduction"
                        class="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">
                          Introduction
                        </div>
                        <p
                          class="text-sm leading-snug line-clamp-2 text-muted-foreground"
                        >
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink as-child>
                      <a
                        href="/docs/installation"
                        class="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">
                          Installation
                        </div>
                        <p
                          class="text-sm leading-snug line-clamp-2 text-muted-foreground"
                        >
                          How to install dependencies and structure your app.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink as-child>
                      <a
                        href="/docs/typography"
                        class="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">
                          Typography
                        </div>
                        <p
                          class="text-sm leading-snug line-clamp-2 text-muted-foreground"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                >
                  <li v-for="component in components" :key="component.title">
                    <NavigationMenuLink as-child>
                      <a
                        :href="component.href"
                        class="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">
                          {{ component.title }}
                        </div>
                        <p
                          class="text-sm leading-snug line-clamp-2 text-muted-foreground"
                        >
                          {{ component.description }}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/docs/introduction"
                :class="navigationMenuTriggerStyle()"
              >
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div class="items-center hidden space-x-4 cursor-pointer md:flex">
          <a
            v-for="item in (theme as any).nav"
            :key="item.text"
            :href="item.link"
            class="px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {{ item.text }}
          </a>
        </div>

        <div class="flex justify-center ">
          <a
            v-for="link in socialLinks"
            :key="link.link"
            :href="link.link"
            target="_blank"
            rel="noopener noreferrer"
            class="px-1"
          >
            <component :is="getIconComponent(link.icon)" class="icon" />
          </a>
        </div>
        <!-- 移动端菜单按钮 -->
        <div class="md:hidden">
          <button class="mobile-menu-button">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
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
}
</style>
