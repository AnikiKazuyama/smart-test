import * as React from 'react';
import ITextField from './types';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';
import { getIn } from 'formik';

function fieldPropToTextFieldProp({
  field,
  form,
  form: { errors, isSubmitting, touched },
  ...rest
}: ITextField): TextFieldProps {
  const { name } = field;
  const error = getIn(errors, name);
  const isFieldTouched = getIn(touched, name);
  const showError = !!error && isFieldTouched;

  return {
    ...field,
    ...rest,
    error: showError,
    helperText: showError ? error : rest.helperText,
    disabled: rest.disabled ? rest.disabled : isSubmitting
  };
}

function TextField(props: any) {
  return <MuiTextField {...fieldPropToTextFieldProp(props)} />;
}

export default TextField;
