const option = ref("");

interface IOption {
  label: string;
  value: string;
  click?: () => void;
}

const options: Array<IOption[]> = [
  [
    {
      label: "Default",
      value: "default",
    },
    {
      label: "Descending",
      value: "descending",
    },
    {
      label: "Ascending",
      value: "ascending",
    },
  ],
];

function click(this: IOption) {
  option.value = this.value;
}

options.forEach((subArray) => {
  subArray.forEach((option) => {
    option.click = click;
  });
});

export function useOptions() {
  return { option, options };
}
