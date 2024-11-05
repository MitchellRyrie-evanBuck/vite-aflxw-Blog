<template>
  <li
    v-for="item in items"
    :key="item.link"
  >
    <NavigationMenuLink as-child>
      <a
        :href="item.link"
        class="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div class="text-sm font-medium leading-none">
          {{ item.text }}
        </div>
      </a>
    </NavigationMenuLink>
    <!-- 递归渲染子项 -->
    <template v-if="item.items && item.items.length > 0">
      <ul class="ml-4">
        <NavItems :items="item.items" />
      </ul>
    </template>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  items: Array<{
    text: string
    link: string
    items?: Array<{ text: string; link: string }>
  }>
}>()
</script>

<style scoped>
/* 添加自定义样式（如果需要） */
</style> 