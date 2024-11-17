<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: $route.path, hash: `#${link.id}` }"
        :class="[computedColorLink(link), { 'ml-4': level }]"
        >{{ link.text }}</NuxtLink
      >
      <TocLinks :links="link.children ?? []" :level="level + 1" />
    </li>
  </ul>
</template>
<script setup lang="ts">
import type { TocLink } from "@nuxt/content";

const {
  level = 0,
  links,
  activeId = null,
} = defineProps<{
  links: TocLink[];
  level?: number;
  activeId?: string;
}>();

const computedColorLink = computed(() => (link: TocLink) => {
  return { "text-green-600 dark:text-green-400": activeId === link.id };
});
</script>
