import * as types from '../constants/actionTypes';
import reducer from './authReducer';

describe('Reducers::authReducer', () => {
  const getInitialState = () => {
    return {
      token: null,
      user: null,
      isAuthenticated: false,
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle RECEIVE_USER_CREDENTIALS', () => {
    const action = {
      type: types.RECEIVE_USER_CREDENTIALS,
      token: 'TOKEN',
      user: {
        pk: 1,
        email: 'test@test.com',
      }
    };
    const expected = {
      token: 'TOKEN',
      user: {
        pk: 1,
        email: 'test@test.com',   
      },
      isAuthenticated: true,
    };

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });

});