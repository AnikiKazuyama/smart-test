import sessionSaga from '../ducks/session/sagas';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(sessionSaga);
}
