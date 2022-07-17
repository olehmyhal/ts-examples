interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

type ResponseDef = IResponseSuccess | IDataFailed;

function isSuccess(res: ResponseDef): res is IResponseSuccess {
  return (res as IResponseSuccess).status === PaymentStatus.Success;
}

function checkStatus(res: IResponseSuccess | IDataFailed): number {
  if (isSuccess(res)) {
    return res.data.databaseId;
  } else {
    throw new Error(res.errorMessage);
  }
}
