import { createReducer, on } from "@ngrx/store";
import { initilaState } from "./counter.store";
import { increment, decrement, reset, custom, modifyName } from "./counter.action";

const _counterReducer = createReducer(
    initilaState,
    on(increment, (state) => {
        return {
            ...state, counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state, counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state, counter: 0
        }
    }),
    on(custom,(state,action)=> {
        return {...state,counter:action.value+state.counter}
    }),
    on(modifyName,(state,action)=> {
        return {...state,userName:action.userName}
    })
    );


export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}