import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import AppReducer from './ducks';
import mySaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga);

export default store;
