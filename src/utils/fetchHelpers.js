import fetch from 'isomorphic-fetch';
import {API_URL} from '../constants/settings';

function getAuthHeaderValue() {
  return 'JWT ' + localStorage.getItem('TOKEN');
}

export function apiPostNoAuth(endpoint, data) {
  return fetch(API_URL+endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export function apiPost(endpoint, data) {
  return fetch(API_URL+endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getAuthHeaderValue()
    },
    body: JSON.stringify(data),
  });
}

export function apiGet(endpoint) {
  return fetch(API_URL+endpoint, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': getAuthHeaderValue()
    }
  });
}