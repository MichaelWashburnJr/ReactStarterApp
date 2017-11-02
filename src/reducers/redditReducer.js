import {RECEIVE_DATA, REQUEST_DATA} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function reducer(state = initialState.reddit, action) {
  let newState;

  switch (action.type) {

    case REQUEST_DATA:
      newState = objectAssign({}, state);
      newState.isFetching = true;
      break;

    case RECEIVE_DATA:
      newState = objectAssign({}, state);
      newState.isFetching = false;
      newState.data = action.data;

      break;

    default:
      newState = state;
  }

  return newState;
}
