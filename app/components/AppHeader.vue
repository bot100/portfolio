<template>
  <header
    class="flex md:justify-between justify-center items-center pt-5 pb-4 px-4 md:border-b-2 md:border-indigo-500"
  >
    <div class="hidden md:block">
      <NuxtLink to="/" class="text-3xl font-semibold link">John Konan</NuxtLink>
    </div>

    <nav class="flex font-mono">
      <AppLinks class="md:flex hidden items-center md:space-x-4 text-xl" />
      <Transition>
        <AppLinks
          v-if="isMenuOpen"
          @handler-close="handlerClose"
          :is-menu-open="isMenuOpen"
          class="nav-bar flex flex-col items-center fixed gap-5 top-0 left-0 w-80 p-10 text-xl bg-gray-300 dark:bg-slate-600 min-h-svh z-50"
        />
      </Transition>
      <AppBurger @toggle-menu="toggleMenu" class="md:hidden block" />
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen: Ref<boolean> = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => window.addEventListener("resize", onResize, true));

function onResize(): void {
  if (window.innerWidth >= 768) {
    isMenuOpen.value = false;
  }
}

function handlerClose() {
  isMenuOpen.value = false;
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
