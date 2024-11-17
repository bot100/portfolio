<template>
  <slot :posts="posts">
    <section class="not-prose font-mono">
      <div class="column text-gray-400 text-sm">
        <div>date</div>
        <div>title</div>
      </div>
      <ul>
        <li v-for="post in postsComputed" :key="post._path">
          <NuxtLink
            :to="post._path"
            class="column hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div
              :class="{
                'text-white dark:text-slate-800': !post.displayYear,
                'text-gray-400 dark:text-gray-500': post.displayYear,
              }"
            >
              {{ post.year }}
            </div>
            <div>{{ post.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";
import type { Ref } from "vue";

interface Post extends Pick<ParsedContent, "_path" | "title" | "publishedAt"> {
  displayYear?: boolean;
  year?: number;
}

const { limit = "" } = defineProps<{
  limit?: string;
}>();

const { data } = await useAsyncData<Post[]>("blog-list", () => {
  const query = queryContent("/blog")
    .where({ _path: { $ne: "/blog" } })
    .only(["_path", "title", "publishedAt"])
    .sort({ publishedAt: -1 });

  if (limit) {
    query.limit(Number(limit));
  }

  return query.find();
});

const posts: Ref<Post[]> = ref(data.value ? data.value : []);
// Guard
const validPosts = posts.value as Post[];

const postsComputed = computed(() => {
  if (!data) return [];
  const result = [];
  let lastYear = null;
  for (const post of validPosts) {
    const year = new Date(post.publishedAt).getFullYear();
    const displayYear = year !== lastYear;
    post.displayYear = displayYear;
    post.year = year;
    result.push(post);
    lastYear = year;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-300 dark:border-gray-700;
}

section {
  width: calc(100% + 100px);
}

@media (width < 768px) {
  section {
    width: 100%;
  }
}
</style>
