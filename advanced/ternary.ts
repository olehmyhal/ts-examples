interface IResponse<T extends "success" | "failed"> {
  code: number;
  data: T extends "success" ? string : Error;
  data2: T extends "success" ? string : number;
}
