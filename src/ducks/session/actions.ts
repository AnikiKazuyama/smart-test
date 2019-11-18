import { createAction } from 'redux-actions';
import ISignInReq from '../../utils/Rest/SessionService/types';
import UserDTO from './../../dto/user';

const signIn = createAction('SIGN_IN', ({ login, password }: ISignInReq) => {
  return { login, password };
});
const signInSuccess = createAction('SIGN_IN_SUCCESS', (user: UserDTO) => user);
const signInFailure = createAction('SIGN_IN_FAILURE');

const session = {
  request: signIn,
  success: signInSuccess,
  failure: signInFailure
};

export { signIn, signInSuccess, signInFailure };
export default session;
