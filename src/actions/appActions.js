import * as types from '../constants/actionTypes';

function appInit() {
  return {
    type: types.APP_INIT,
  };
}

export function init() {
  return function(dispatch) {
    return dispatch(appInit());
  };
}
