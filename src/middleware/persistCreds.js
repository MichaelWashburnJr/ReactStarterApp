import * as actionTypes from '../constants/actionTypes';
import * as authActions from '../actions/authActions';
import {apiPost, apiGet} from '../utils/fetchHelpers';

const ignoreErrors = () => {};

function refreshToken(token) {
  return apiPost('/auth/token/refresh/', {
    token: token,
  })
  .then((response) => {
    if(response.ok) {
      return response.json()
        .then(json => json.token);
    }
    else {
      throw 'Failed to refesh token.';
    }
  });
}

function verifyToken(token) {
  return apiPost('/auth/token/verify/', {
    token: token,
  })
  .then((response) => {
    if(response.ok) {
      return true;
    }
    else {
      throw 'Invalid Token';
    }
  });
}

function getUser() {
  return apiGet('/auth/user/')
    .then((response) => {
      return response.json();
    });
}

function checkAndSaveCreds(token) {
  return function (dispatch) {
    if(token) {
      verifyToken(token).then(
        () => {
          refreshToken(token).then(
            (token) => {
              localStorage.setItem('TOKEN', token);
              getUser().then(
                (user) => {
                  return dispatch(authActions.receiveUserCredentials(token, user));
                }
              );
            }
          );
        },
      )
      .catch(ignoreErrors);
    }
  };
}

/* eslint-disable no-unused-vars */
export const persistCreds = store => next => action => {

  switch(action.type) {

    case actionTypes.APP_INIT:
      checkAndSaveCreds(
        localStorage.getItem('TOKEN'),
      )(next);
      break;

    case actionTypes.RECEIVE_USER_CREDENTIALS:
      localStorage.setItem('TOKEN', action.token);
      break;

    case actionTypes.REMOVE_USER_CREDENTIALS:
      localStorage.removeItem('TOKEN');
      break;

  }

  return next(action);
};