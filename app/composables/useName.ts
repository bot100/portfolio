const nameComputed = computed(() => (name: string) => {
  const tags = name.split("-").map((item) => {
    return `<span class="${nameColorComputed.value(item)}">${item}</span>`;
  });

  return tags.join("-");
});

const mapColors = new Map<string, string>([
  ["vue", "text-emerald-600"],
  ["laravel", "text-red-700"],
  ["php", "text-indigo-700"],
  ["tailwind", "text-sky-400"],
  ["graphql", "text-fuchsia-500"],
  ["react", "text-blue-500"],
  ["js", "text-yellow-300"],
  ["nest", "text-rose-600"],
  ["symfony", "text-black"],
]);

const nameColorComputed = computed(() => (name: string) => {
  for (let [key, _] of mapColors) {
    if (name.includes(key)) {
      return mapColors.get(key);
    }
  }
});

export function useName() {
  return { nameComputed };
}
