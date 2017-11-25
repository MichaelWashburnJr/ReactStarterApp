import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as types from '../constants/actionTypes';
import * as errors from '../constants/errors';
import * as actions from './appActions';
import {API_URL} from '../constants/settings';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('appActions', () => {

  afterEach(()=>{
    nock.cleanAll();
  });

  it('appInit works', () => {
    const expectedActions = [
      {
        type: types.APP_INIT, 
      }
    ];
    const store = mockStore({});
    store.dispatch(actions.init());
    expect(store.getActions()).toEqual(expectedActions);
  });

});
