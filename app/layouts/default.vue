<template>
  <div class="container mx-auto max-w-5xl min-h-svh flex flex-col">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style>
body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  @apply bg-white dark:bg-slate-800;
  @apply text-black dark:text-white;
}

.container {
  width: 100%;
}
</style>
