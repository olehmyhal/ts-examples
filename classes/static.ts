//static is available only when u call it threw class itself, not the instance

class UserService {
  private static db: any;

  static getUser(id: number) {
    return UserService.db.findById(id);
  }

  constructor(id: number) {}

  create() {
    UserService.db;
  }

  static {
    UserService.db = "smth";
  }
}

UserService.getUser(12);
const userService = new UserService(12);
userService.create();
