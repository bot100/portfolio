<template>
  <NuxtLayout>
    <section class="m-10 flex flex-col items-center">
      <h2 class="text-4xl mb-4 text-red-500 dark:text-red-700">
        Opps {{ error.statusCode }}
      </h2>
      <h3 class="text-xl text-gray-500 dark:text-gray-400">
        {{ error.statusMessage }}
      </h3>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
  error: NuxtError;
}>();
</script>
