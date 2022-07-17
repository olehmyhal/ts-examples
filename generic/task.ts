interface ID {
  id: number;
}

type Direction = "ASC" | "DESC";

function sortById<T extends ID[]>(data: T, direction: Direction = "ASC"): T {
  return data.sort((a, b) => (direction === "ASC" ? a.id - b.id : b.id - a.id));
}

sortById([{ id: 1, name: "Oleg" }], "DESC");
