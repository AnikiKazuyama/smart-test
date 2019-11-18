import { handleActions, Action } from 'redux-actions';
import { signIn, signInFailure, signInSuccess } from './actions';
import ISignInReq from '~utils/Rest/SessionService/types';

enum STATUS {
  OK = 'ok',
  ERROR = 'error',
  PENDING = 'pending'
}

interface ILoadable {
  status: STATUS;
  reason: string;
}

interface ISession extends ILoadable {
  token: string | null;
}

const defaultSession: ISession = {
  token: null,
  status: STATUS.PENDING,
  reason: ''
};

const session = handleActions<ISession>(
  {
    [signIn.toString()]: (state, action) => ({
      ...state,
      token: action.payload.token,
      status: defaultSession.status,
      reason: defaultSession.reason
    }),
    [signInFailure.toString()]: (state, action) => ({
      ...state,
      token: action.payload.token,
      status: STATUS.ERROR,
      reason: action.payload.reason
    }),
    [signInSuccess.toString()]: (state, action) => ({
      ...state,
      token: action.payload.token,
      status: STATUS.OK,
      reason: ''
    })
  },
  defaultSession
);

export default session;
