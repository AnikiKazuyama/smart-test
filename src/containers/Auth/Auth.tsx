import * as React from 'React';
import LoginForm from '../Forms/LoginForm/LoginForm';
import { ILoginFormValues, ResultStatuses } from '../Forms/LoginForm/types';
import { connect } from 'react-redux';
import session from '~ducks/session/actions';

function AuthContainer({ token, signIn }) {
  const handleSubmit = async ({ login, password }: ILoginFormValues) => {
    const authResponse = signIn({ login, password });
    console.log(authResponse);
    return {
      status: authResponse ? ResultStatuses.Ok : ResultStatuses.Error
    };
  };
  return <LoginForm onSubmit={handleSubmit} />;
}
const mstp = state => ({
  token: state.session.token
});
const mdtp = dispatch => ({
  signIn: ({ login, password }) => {
    dispatch(session.request({ login, password }));
  }
});

const ConnectedAuthContainer = connect(mstp, mdtp)(AuthContainer);
export default ConnectedAuthContainer;
