import {createFeatureSelector, createSelector} from "@ngrx/store";
import { CounterState } from "./counter.store";
export const COUNTER_STATE_NAME="counter";
const getCounterState = createFeatureSelector<CounterState>(COUNTER_STATE_NAME);
export const getCounter = createSelector(getCounterState,(state)=>{
    return state.counter;
});

export const getUserName = createSelector(getCounterState,(state)=>{
    return state.userName;
});