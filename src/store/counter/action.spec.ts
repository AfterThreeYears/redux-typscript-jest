import { ThunkDispatch } from 'redux-thunk';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { initState } from './reducer';
import * as actions from './actions';
import * as types from './types';
import { AnyAction } from 'redux';
import axios from 'axios';
import { wrapResponse } from '../../../__test__/help';

const middwares = [thunk];
const mockStore = configureMockStore<types.CounterState, ThunkDispatch<types.CounterState, void, AnyAction>>(middwares);

jest.mock('axios', () => {
  return {
    get: jest.fn()
  };
});

describe('counter sync actions', () => {
  it('addCount', () => {
    expect(actions.addCount(1)).toEqual({
      type: types.ADD_COUNT,
      payload: 1
    });
  });

  it('subCount', () => {
    expect(actions.subCount(1)).toEqual({
      type: types.SUB_COUNT,
      payload: 1
    });
  })
});

describe('counter async actions', () => {
  afterEach(() => {
    jest.resetAllMocks();
  })

  it('thunkAdd success', async () => {
    const mockResult = { followers: 10 };


    (axios.get as jest.MockedFunction<typeof axios>).mockResolvedValueOnce(wrapResponse(mockResult));

    const expectActions = [
      actions.fetching(),
      actions.addCount(mockResult.followers),
      actions.fetchSuccess(),
    ];
    const store = mockStore(initState);

    await store.dispatch(actions.asyncAdd());
    expect(store.getActions()).toEqual(expectActions);
    expect(axios.get).toBeCalledWith('https://api.github.com/users/AfterThreeYears')
  });

  it('thunkAdd fail', async () => {
    const mockResult = { error: 'i am error' };

    (axios.get as jest.MockedFunction<typeof axios>).mockRejectedValueOnce(wrapResponse(mockResult));

    const expectActions = [
      actions.fetching(),
      actions.fetchError(),
    ];
    const store = mockStore(initState);

    await store.dispatch(actions.asyncAdd());
    expect(store.getActions()).toEqual(expectActions);
  });
});

