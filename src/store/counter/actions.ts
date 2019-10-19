import {
  ADD_COUNT,
  SUB_COUNT,
  FETCHING,
  FETCH_SUCCESS,
  FETCH_ERROR,
  fetchingAction,
  fetchSuccessAction,
  fetchErrorAction,
  addCountAction,
  subCountAction,
  CounterActionType
} from "./types";
import { ThunkDispatch } from "redux-thunk";
import axios from 'axios';

export function addCount(count: number): addCountAction {
  return {
    type: ADD_COUNT,
    payload: count
  };
}

export function subCount(count: number): subCountAction {
  return {
    type: SUB_COUNT,
    payload: count
  };
}

export function fetching(): fetchingAction {
  return {
    type: FETCHING
  };
}

export function fetchSuccess(): fetchSuccessAction {
  return {
    type: FETCH_SUCCESS
  };
}

export function fetchError(): fetchErrorAction {
  return {
    type: FETCH_ERROR
  };
}

export function asyncAdd() {
  return async (dispatch: ThunkDispatch<{}, {}, CounterActionType>) => {
    try {
      dispatch(fetching());
      const resp = await axios.get<{ followers: number }>('https://api.github.com/users/AfterThreeYears');
      dispatch(addCount(resp.data.followers));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError());
    }
  }
}
