<template>
  <div class="not-prose">
    <section v-if="loading">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>
      <div class="flex flex-wrap justify-between gap-5 text-xl py-3">
        <h3>Take a look at my GitHub projects!</h3>
        <UDropdown
          :items="options"
          mode="hover"
          :popper="{ placement: 'bottom-start' }"
        >
          <UButton
            color="white"
            label="Sort by order"
            trailing-icon="i-heroicons-chevron-down-20-solid"
          />
        </UDropdown>
      </div>
      <ul class="grid grid-cols-1 gap-4">
        <ProjectItem :data="data" :option="option" />
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { UserPiotrJura } from "~/types/users";

const {
  error,
  pending: loading,
  data,
} = await useFetch<Array<UserPiotrJura>>(
  "https://api.github.com/users/piotr-jura-udemy/repos"
);

const { option, options } = useOptions();
</script>
