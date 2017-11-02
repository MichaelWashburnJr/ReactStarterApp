import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as types from '../constants/actionTypes';
import * as actions from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  afterEach(()=>{
    nock.cleanAll();
    nock.restore();
  });

  it('should create an action to calculate fuel savings', () => {
    nock('http://reddit.com')
      .get('/r/programming.json')
      .reply(200, {test: 'test'});

    const expectedActions = [
      { type: types.REQUEST_DATA },
      { type: types.RECEIVE_DATA, data: { test: 'test' } }
    ];
    const store = mockStore({});

    return store.dispatch(actions.getData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });

  });
});
