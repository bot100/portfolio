<template>
  <article
    class="prose prose-h1:text-center max-w-none dark:prose-invert prose-pre:bg-slate-300 prose-pre:text-gray-700 dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-300"
  >
    <ContentDoc>
      <template #not-found>
        <h2 class="text-red-500 dark:text-red-700">
          Document not found! (404)
        </h2>
        <p>This blog post could not be found.</p>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div
            class="justify-self-center"
            :class="{
              'col-span-6 md:col-span-4': doc.toc,
              'col-span-6': !doc.toc,
            }"
          >
            <ContentRenderer :value="doc" />
          </div>

          <div v-if="doc.toc" class="hidden md:col-span-2 md:block not-prose">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Table of Contents</div>
              <nav v-if="doc.body?.toc?.links">
                <TocLinks :links="doc.body?.toc?.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
const activeId = ref("");

onMounted(() => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
  };
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });
  const elements = document.querySelectorAll("h2, h3");

  for (const element of elements) {
    observer.observe(element);
  }

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});
</script>
