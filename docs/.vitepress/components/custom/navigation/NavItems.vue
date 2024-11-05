<template>
  <div v-for="item in items" :key="item.link" >
    <NavigationMenuLink as-child>
      <a
        :href="item.link"
        class="block p-2 space-y-1 leading-none no-underline transition-colors "
      >
        <BadgeCom class="text-sm font-medium leading-none">
          {{ item.text }}
        </BadgeCom>
      </a>
    </NavigationMenuLink>
    <!-- 递归渲染子项 -->
    <template v-if="item.items && item.items.length > 0">
      <NavItems :items="item.items" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Badge as BadgeCom } from '../../ui/badge'
import {
  NavigationMenuLink,
} from '../../ui/navigation-menu';
defineProps<{
  items: Array<{
    text: string;
    link: string;
    items?: Array<{ text: string; link: string }>;
  }>;
}>();
</script>

<style scoped>
/* 添加自定义样式（如果需要） */
</style>
