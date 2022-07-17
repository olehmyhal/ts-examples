interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class UserServiceExamp implements IUserService {
  users: number = 100;

  @Catch()
  getUsersInDatabase(): number {
    return this.users;
  }
}

function Catch(rethrow: boolean = false) {
  return (
    target: Object,
    _: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any) => any>
  ): TypedPropertyDescriptor<(...args: any) => any> | void => {
    const method = descriptor.value;
    descriptor.value = async (...args: any[]) => {
      try {
        return await method?.apply(target, args);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err);
          if (rethrow) {
            throw err;
          }
        }
      }
    };
  };
}
