// import fetch from 'isomorphic-fetch';
// import {API_URL} from '../constants/settings';
import * as types from '../constants/actionTypes';
import * as errors from '../constants/errors';
import {apiPost, apiPostNoAuth} from '../utils/fetchHelpers';

export function receiveUserCredentials(json) {
  return {
      type: types.RECEIVE_USER_CREDENTIALS,
      token: json.token,
      user: json.user,
  };
}

function removeUserCredentials() {
  return {
    type: types.REMOVE_USER_CREDENTIALS,
  };
}

export function logout() {
  return function(dispatch) {
    return apiPost('/auth/logout/')
      .then(() => {
        return dispatch(removeUserCredentials());
      });
  };
}

export function login(email, password) {
  return function (dispatch) {
    return apiPostNoAuth('/auth/login/', {
      email: email,
      password: password
    })
    .then(
      response => {
        if(response.ok) {
          return response.json();
        }
        throw errors.LOGIN_FAILED;
      },
    )
    .then((json) => {
      dispatch(receiveUserCredentials(json));
      return json;
    });
  };
}
