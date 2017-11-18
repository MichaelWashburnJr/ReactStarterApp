import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';
import * as errors from '../constants/errors';
import {API_URL} from '../constants/settings';

function receiveUserCredentials(json) {
  return {
      type: types.RECEIVE_USER_CREDENTIALS,
      token: json.token,
      user: json.user,
  };
}

export function login(email, password) {
  return function (dispatch) {
    return fetch(API_URL+'/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(
      response => {
        if(response.ok) {
          return response.json()
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