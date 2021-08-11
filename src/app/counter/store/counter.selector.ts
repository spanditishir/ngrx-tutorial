import {createFeatureSelector, createSelector} from "@ngrx/store";
import { CounterState } from "./counter.store";
const getCounterState = createFeatureSelector<CounterState>("nikhil");
export const getCounter = createSelector(getCounterState,(state)=>{
    return state.counter;
});

export const getUserName = createSelector(getCounterState,(state)=>{
    return state.userName;
});