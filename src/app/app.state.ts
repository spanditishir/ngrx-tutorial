import { counterReducer } from "./counter/store/counter.reducer";
import { CounterState } from "./counter/store/counter.store";
import { PostReducer } from "./posts/store/posts.reducer";
import { PostState } from "./posts/store/posts.store";
export interface AppState{
    nikhil:CounterState,
    post:PostState
}
export const AppReducer = {
 nikhil:counterReducer,
 post:PostReducer
}