import * as React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { ILoginFormValues, ILoginForm, ISubmitResult, ResultStatuses } from './types';
import TextField from '../inputs/TextField';
import FormRow from '../layout/FormRow';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const initialValues: ILoginFormValues = {
  login: '',
  password: ''
};

const loginFormSchema = yup.object({
  login: yup.string().required('Логин обязателен к заполнению'),
  password: yup
    .string()
    .required('Пароль обязателен к заполнению')
    .min(6, 'Пароль не может быть меньше 6 смиволов')
});

const LoginForm = ({ onSubmit }: ILoginForm) => {
  const handleSubmit = async (
    values: ILoginFormValues,
    { setSubmitting, setStatus }: FormikHelpers<ILoginFormValues>
  ) => {
    if (onSubmit) {
      const result: ISubmitResult = await onSubmit(values);
      if (result.status !== ResultStatuses.Ok) setStatus(result.errorMessage);
    }

    setSubmitting(false);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={loginFormSchema}
    >
      {props => (
        <Form>
          <Paper>
            <Grid container direction="column" alignItems="center">
              <FormRow>
                <Field name="login" type="text" component={TextField} label="Логин" />
              </FormRow>
              <FormRow>
                <Field name="password" type="password" component={TextField} label="Пароль" />
              </FormRow>
              <FormRow>
                <Button type="submit" disabled={props.isSubmitting}>
                  Войти
                </Button>
              </FormRow>
            </Grid>
          </Paper>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
