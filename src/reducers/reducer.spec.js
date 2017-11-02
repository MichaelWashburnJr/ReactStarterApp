import * as types from '../constants/actionTypes';
import reducer from './redditReducer';

describe('Reducers::reducer', () => {
  const getInitialState = () => {
    return {
      isFetching: false,
      data: {}
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle REQUEST_DATA', () => {
    const action = { type: types.REQUEST_DATA };
    const expected = {
      isFetching: true,
      data: {}
    };

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });

  it('should handle RECEIVE_DATA', () => {
    const action = { 
      type: types.RECEIVE_DATA, 
      data: {
        test: 'test',
      }
    };
    const expected = {
      isFetching: false,
      data: {
        test: 'test'
      }
    };

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });
});
