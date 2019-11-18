import { put, call } from 'redux-saga/effects';

function* fetchEntity(action: any, apiFn: any, args: any) {
  const { response, error } = yield call(apiFn, args);
  if (response) yield put(action.success(response));
  else yield put(action.failure(error));
}

export default fetchEntity;
