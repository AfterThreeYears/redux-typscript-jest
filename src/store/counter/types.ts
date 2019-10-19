export interface CounterState {
  loading: boolean;
  count: number;
}

export const ADD_COUNT = "ADD_COUNT";
export const SUB_COUNT = "SUB_COUNT";
export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export interface addCountAction {
  type: typeof ADD_COUNT;
  payload: number;
}

export interface subCountAction {
  type: typeof SUB_COUNT;
  payload: number;
}

export interface fetchingAction {
  type: typeof FETCHING;
}

export interface fetchSuccessAction {
  type: typeof FETCH_SUCCESS;
}

export interface fetchErrorAction {
  type: typeof FETCH_ERROR;
}

export type CounterActionType = addCountAction | subCountAction | fetchingAction | fetchSuccessAction | fetchErrorAction;
