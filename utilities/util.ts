interface IU {
  name: string;
  age?: number;
  email: string;
}

type p = Partial<IU>;
type r = Readonly<IU>;
type rr = Required<IU>;

interface IP {
  id: number;
  sum: number;
  from: string;
  to: string;
}

type pp = Pick<IP, "id">;
type o = Omit<IP, "id">;

type ExctractEx = Extract<"from" | "to" | IP, string>;
type ExcludeEx = Exclude<"from" | "to" | IP, string>;

class CUser {
  constructor(public name: string, public age: number) {}
}

function getData(id: number): CUser {
  return new CUser("Oleg", id);
}

type RT = ReturnType<typeof getData>;
type PT = Parameters<typeof getData>;
type RT2 = ReturnType<<T extends string>() => T>;
type CT = ConstructorParameters<typeof User>;

type A = Awaited<Promise<string>>;
