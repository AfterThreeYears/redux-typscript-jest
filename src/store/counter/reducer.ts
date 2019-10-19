import { CounterState, CounterActionType, ADD_COUNT, SUB_COUNT, FETCHING, FETCH_SUCCESS, FETCH_ERROR } from "./types";

export const initState: CounterState = {
  loading: false,
  count: 0
};

export function counterReducer(state = initState, action: CounterActionType): CounterState {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + action.payload
      };
    case SUB_COUNT:
      return {
        ...state,
        count: state.count - action.payload
      };
    case FETCHING:
      return {
        ...state,
        loading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        count: 0
      };
    default:
      return state;
  }
}
