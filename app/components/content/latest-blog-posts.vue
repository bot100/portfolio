<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
    <div v-for="post in posts" :key="post._path">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>

<script setup lang="ts">
const { limit = "" } = defineProps<{
  limit?: string;
}>();
</script>
