import { combineReducers } from 'redux';
import reddit from './redditReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  reddit,
  routing: routerReducer
});

export default rootReducer;
