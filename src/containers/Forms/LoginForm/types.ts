enum ResultStatuses {
  Ok = 'ok',
  Error = 'error'
}

interface ISubmitResult {
  status: ResultStatuses;
  errorMessage?: string;
}

interface ILoginFormValues {
  login: string;
  password: string;
}

interface ILoginForm {
  onSubmit?: (values: ILoginFormValues) => Promise<ISubmitResult> | ISubmitResult;
}

export { ILoginFormValues, ILoginForm, ISubmitResult, ResultStatuses };
