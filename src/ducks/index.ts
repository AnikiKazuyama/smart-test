import session from './session/reducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  session
});

export default appReducer;
