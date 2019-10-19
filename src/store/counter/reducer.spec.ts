import * as actions from './actions';
import { AnyAction } from 'redux';
import { counterReducer, initState } from "./reducer";

describe('reducer' , () => {
  it('counterReducer defalut', () => {
    const state = counterReducer(undefined, {} as AnyAction);
    expect(state).toEqual(initState);
  });

  it('counterReducer addCount', () => {
    const state = counterReducer(initState, actions.addCount(1));
    expect(state.count).toEqual(1);
  });

  it('counterReducer subCount', () => {
    const state = counterReducer(initState, actions.subCount(10));
    expect(state.count).toEqual(-10);
  });

  it('counterReducer fetching', () => {
    const state = counterReducer(initState, actions.fetching());
    expect(state.loading).toEqual(true);
  });

  it('counterReducer fetchSuccess', () => {
    const state = counterReducer(initState, actions.fetchSuccess());
    expect(state.loading).toEqual(false);
  });

  it('counterReducer fetchError', () => {
    const state = counterReducer(initState, actions.addCount(10));
    expect(state.count).toEqual(10);
    const nextState = counterReducer(state, actions.fetchError());
    expect(nextState).toEqual({ count: 0, loading: false });
  });
})