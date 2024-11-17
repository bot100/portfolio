<template>
  <ul>
    <li>
      <NuxtLink to="/">Home</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/projects">Projects</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/blog">Blog</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about">About</NuxtLink>
    </li>
    <li>
      <TheToggle />
    </li>
    <li v-if="isMenuOpen">
      <UButton
        @click="$emit('handler-close')"
        color="amber"
        variant="solid"
        class="text-base font-bold"
        >Close Bar</UButton
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
const { isMenuOpen } = defineProps<{
  isMenuOpen?: boolean;
}>();

defineEmits(["handler-close"]);
</script>

<style scoped>
ul > li {
  @apply hover:text-blue-500 hover:underline transition duration-300 p-2;
}
</style>
