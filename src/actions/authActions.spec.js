import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as types from '../constants/actionTypes';
import * as errors from '../constants/errors';
import * as actions from './authActions';
import {API_URL} from '../constants/settings';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authActions', () => {
  afterEach(()=>{
    nock.cleanAll();
  });

  it('should create an action to receive user credentials on ok response', () => {
    nock(API_URL)
      .post('/auth/login/')
      .reply(200, {
        token: 'TOKEN',
        user: {}
      });

    const expectedActions = [
      {
        type: types.RECEIVE_USER_CREDENTIALS, 
        token: 'TOKEN',
        user: {}
      }
    ];
    const store = mockStore({});
    return store.dispatch(actions.login('email', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should not create an action to receive credentials with a bad response.', () => {
    nock(API_URL)
      .post('/auth/login/')
      .reply(400);

    const store = mockStore({});
    return store.dispatch(actions.login('email', 'password')).then(() => {
      expect(store.getActions()).toThrow(errors.LOGIN_FAILED);
    });
  });
  
});
