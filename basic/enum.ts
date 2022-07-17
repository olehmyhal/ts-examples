enum StatusCode {
  SUCCESS = 1,
  FAIL = 0,
  PENDING = 2,
}

interface IBody {
  email: string;
  password: string;
}

const req = (status: StatusCode, body: IBody): void => {
  console.log(status, body);
};

const body = {
  email: "gfdjfg",
  password: "fgd542903gf",
};

req(StatusCode.SUCCESS, body);
