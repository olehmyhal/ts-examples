interface IForm {
  name: string;
  password: string;
}

interface FormFieldSuccess {
  isValid: true;
}

interface FormFieldFail {
  isValid: false;
  errorMessage: string;
}

type FormValidation<T> = {
  [P in keyof T]: FormFieldSuccess | FormFieldFail;
};

const form: FormValidation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: "Error" },
};
