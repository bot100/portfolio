<template>
  <ClientOnly>
    <div class="relative">
      <div
        v-if="showLabel"
        class="md:block hidden text-sm absolute bottom-9 right-0 whitespace-nowrap"
      >
        Change {{ colorMode.value }} theme
      </div>
      <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="gray"
        aria-label="Theme"
        variant="ghost"
        @click="isDark = !isDark"
        @mouseenter="showLabel = true"
        @mouseleave="showLabel = false"
      />
    </div>

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const showLabel = ref(false);

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },

  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
