<template>
  <NuxtLayout>
    <main class="p-2 my-10 flex flex-grow justify-center">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<style>
h2 {
  @apply text-2xl font-semibold mb-5;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
