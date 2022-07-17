class User {
  name: string;
  age: number;

  //all possible contstuctors start (variations which are available for users)
  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  //all possible contstuctors end

  constructor(nameOrAge?: string | number, age?: number) {
    if (typeof nameOrAge === "string") {
      this.name = nameOrAge;
    } else if (typeof nameOrAge === "number") {
      this.age = nameOrAge;
    }

    if (typeof age === "number") {
      this.age = age;
    }
  }
}

const user = new User();
const user1 = new User(12);
const user2 = new User("Oleg");
const user3 = new User("Oleg", 12);
