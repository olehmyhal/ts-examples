interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

@AddDateToClass
class UserServiceEx implements IUserService {
  users: number = 100;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function AddDateToClass<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    createdAt = new Date();
  };
}

type CreatedAt = {
  createdAt: Date;
};

(new UserServiceEx() as IUserService & CreatedAt).createdAt;
