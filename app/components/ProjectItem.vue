<template>
  <li
    v-for="repository in computedData"
    :key="repository.id"
    class="border border-gray-300 dark:border-gray-700 rounded-sm p-5 hover:bg-slate-300 dark:hover:bg-slate-700 font-mono"
  >
    <a :href="repository.html_url" target="_blank">
      <div class="flex justify-between">
        <div
          v-html="`-- ${nameComputed(repository.name)} --`"
          class="semi-bold"
        ></div>
        <div>{{ repository.stargazers_count }} ⭐</div>
      </div>
      <ul class="list__under text-sm pl-6 pt-2">
        <li>{{ repository.description }}</li>
      </ul>
    </a>
  </li>
</template>

<script setup lang="ts">
import type { UserPiotrJura } from "~/types/users";

const props = defineProps<{
  data?: UserPiotrJura[];
  option?: string;
}>();

const { nameComputed } = useName();

const computedData = computed(() => {
  const filteredData = props.data?.filter(
    (repository) => repository.description
  );

  if (props.option === "descending" && filteredData) {
    return filteredData.toSorted(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
  }

  if (props.option === "ascending" && filteredData) {
    return filteredData.toSorted(
      (a, b) => a.stargazers_count - b.stargazers_count
    );
  }

  return filteredData;
});
</script>

<style scoped>
ul.list__under {
  list-style: circle;
}
</style>
