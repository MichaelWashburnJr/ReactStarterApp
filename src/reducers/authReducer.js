import {RECEIVE_USER_CREDENTIALS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function reducer(state = initialState.auth, action) {
  let newState;

  switch (action.type) {

    case RECEIVE_USER_CREDENTIALS:
      newState = objectAssign({}, state);
      newState.token = action.token;
      newState.user = action.user;
      break;

    default:
      newState = state;
  }

  return newState;
}