<template>
  <div class="flex flex-wrap gap-4 fixed">
    <button
      @click="toggleMenu"
      value="hamburger"
      class="flex flex-col justify-around h-8 w-8 p-1 rounded bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-500"
    >
      <!-- Hamburger Icon (3 lines) -->
      <span class="h-0.5 rounded bg-slate-900 w-full"></span>
      <span class="h-0.5 rounded bg-slate-900 w-full"></span>
      <span class="h-0.5 rounded bg-slate-900 w-full"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["toggle-menu"]);

function toggleMenu() {
  emit("toggle-menu");
}
</script>
