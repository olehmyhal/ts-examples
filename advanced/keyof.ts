interface Data {
  group: number;
  name: string;
}

const data: Data[] = [
  { group: 1, name: "a" },
  { group: 1, name: "a" },
  { group: 2, name: "3" },
];

type GroupResult<T> = Record<string, T[]>;

type key = string | number | symbol;

function groupByValue<T extends Record<key, any>>(
  values: T[],
  key: keyof T
): GroupResult<T> {
  return values.reduce<GroupResult<T>>((map: GroupResult<T>, value) => {
    const itemKey = value[key];
    let currentEl = map[itemKey];
    if (Array.isArray(currentEl)) {
      currentEl.push(value);
    } else {
      currentEl = [value];
    }
    map[itemKey] = currentEl;
    return map;
  }, {});
}

groupByValue<Data>(data, "group");
