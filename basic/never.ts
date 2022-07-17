const func = (): never => {
  if (true) {
    throw new Error("WTFFF");
  }
};

type paymentAction = "refund" | "checkout";

function proccessAction(action: paymentAction) {
  switch (action) {
    case "refund":
      return 1;
    case "checkout":
      return 2;
    default:
      const _: never = action;
      throw new Error("Action doesnt exist");
  }
}
