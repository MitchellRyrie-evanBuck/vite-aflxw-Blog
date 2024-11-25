<script setup>
import { useData } from 'vitepress';
const { frontmatter } = useData();

// 定义动画变体
const heroVariants = {
  initial: { opacity: 0, y: 50 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 800,
      ease: 'easeOut'
    }
  }
}

const imageVariants = {
  initial: { scale: 0.8, opacity: 0 },
  enter: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 1000,
      type: 'spring',
      stiffness: 100
    }
  }
}

const actionVariants = {
  initial: { opacity: 0, y: 20 },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      delay: i * 100
    }
  })
}

const featureVariants = {
  initial: { opacity: 0, y: 30 },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 600,
      delay: i * 200
    }
  })
}
</script>

<template>
  <div class="custom-home">
    <!-- 头部区域 -->
    <header class="hero">
      <div v-motion
        :initial="heroVariants.initial"
        :enter="heroVariants.enter">
        <h1 class="text-3xl font-bold text-blue-600">
          {{ frontmatter.hero.name }}
        </h1>
        <p class="description">{{ frontmatter.hero.text }}</p>
        <p class="tagline">{{ frontmatter.hero.tagline }}</p>
      </div>

      <!-- 自定义图片 -->
      <div class="image"
        v-motion
        :initial="imageVariants.initial"
        :enter="imageVariants.enter">
        <img
          :src="frontmatter.hero.image.src"
          :alt="frontmatter.hero.image.alt"
        />
      </div>

      <!-- 操作按钮 -->
      <div class="actions">
        <div v-for="(action, index) in frontmatter.hero.actions" 
             :key="action.link"
             v-motion
             :initial="actionVariants.initial"
             :enter="actionVariants.enter(index)">
          <a :href="action.link" :class="action.theme">{{ action.text }}</a>
        </div>
      </div>
    </header>

    <!-- 特性区域 -->
    <div class="features">
      <div
        v-for="(feature, index) in frontmatter.features"
        :key="feature.title"
        class="feature-item"
        v-motion
        :initial="featureVariants.initial"
        :enter="featureVariants.enter(index)"
      >
        <div class="icon" v-if="feature.icon">{{ feature.icon }}</div>
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.custom-home {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 48px 0;
}

.hero h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
}

.description {
  font-size: 28px;
  color: var(--vp-c-text-2);
  margin: 24px 0;
}

.tagline {
  font-size: 18px;
  color: var(--vp-c-text-3);
}

.image {
  margin: 48px auto;
  max-width: 400px;
}

.image img {
  width: 100%;
  height: auto;
}

.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 32px;
}

.actions a {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
}

.actions a.brand {
  background-color: var(--vp-c-brand);
  color: white;
}

.actions a.alt {
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 48px 0;
}

.feature-item {
  text-align: center;
  padding: 24px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.feature-item .icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.feature-item h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.feature-item p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
