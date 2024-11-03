<script setup lang="ts">
import { useData } from 'vitepress'
const { site, theme } = useData()
</script>

<template>
  <div class="w-full bg-white shadow-md custom-nav dark:bg-gray-800">
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between h-16">
        <!-- Logo 区域 -->
        <div class="flex items-center">
          <img :src="theme.logo" alt="logo" class="w-8 h-8">
          <span class="ml-2 text-xl font-bold">{{ site.title }}</span>
        </div>

        <!-- 导航链接 -->
        <div class="items-center hidden space-x-4 md:flex">
          <a v-for="item in theme.nav" 
             :key="item.text" 
             :href="item.link"
             class="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            {{ item.text }}
          </a>
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden">
          <button class="mobile-menu-button">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
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
