import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';

function requestData() {
  return {
    type: types.REQUEST_DATA,
  };
}

function receiveData(data) {
  return {
    type: types.RECEIVE_DATA,
    data: data,
  };
}

/*
This is how actions should be made to fetch data. */
export function getData() {

  return function (dispatch) {

    dispatch(requestData());

    return fetch('http://reddit.com/r/programming.json')
      .then(
        response => response.json(),
        error => error
      )
      .then(json =>
        dispatch(receiveData(json))
      );

  };
}