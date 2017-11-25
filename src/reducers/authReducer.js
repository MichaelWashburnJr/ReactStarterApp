import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function reducer(state = initialState.auth, action) {
  let newState;

  switch (action.type) {

    case types.REMOVE_USER_CREDENTIALS:
      newState = objectAssign({}, state);
      newState.token = null;
      newState.user = null;
      newState.isAuthenticated = false;
      break;

    case types.RECEIVE_USER_CREDENTIALS:
      newState = objectAssign({}, state);
      newState.token = action.token;
      newState.user = action.user;
      newState.isAuthenticated = true;
      break;

    default:
      newState = state;
  }

  return newState;
}