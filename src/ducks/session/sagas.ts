import fetchEntity from './../../rootSaga/common/index';
import signInReq from './actions';
import SessionService from './../../utils/Rest/SessionService/SessionService';
import { fork, all, call, takeLatest } from 'redux-saga/effects';

const signIn: any = args => fetchEntity(signInReq, SessionService.signIn, args);

function* sessionSaga(action) {
  const { login, password } = action.payload;
  yield call(signIn, { login, password });
}

function* watchSession() {
  yield takeLatest(signInReq.request.toString(), sessionSaga);
}

function* root() {
  yield all([fork(watchSession)]);
}

export default root;
