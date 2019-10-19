import { CounterActionType } from './counter/types';
import { createStore, compose, applyMiddleware } from "redux";
import reducer, { AppState } from "./reducer";
import logger from "redux-logger";
import thunk, { ThunkMiddleware } from 'redux-thunk';

const stroe = createStore(reducer, applyMiddleware(thunk as ThunkMiddleware<AppState, CounterActionType>, logger));

export default stroe;
