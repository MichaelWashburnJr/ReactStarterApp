import { combineReducers } from 'redux';
import auth from './authReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  auth,
  routing: routerReducer
});

export default rootReducer;
