type Modifier = "write" | "read" | "edit";

type UserRoles = {
  customers?: Modifier;
  projects?: Modifier;
  adminPanel?: Modifier;
};

type ModifierToAccess<T> = {
  +readonly [P in keyof T as Exclude<
    `canAccess${string & P}`,
    "canAccessadminPanel"
  >]-?: boolean;
  //   +readonly [P in keyof T as `canAccess${string & P}`]-?: boolean;
};

type UserRolesModifier = ModifierToAccess<UserRoles>;
