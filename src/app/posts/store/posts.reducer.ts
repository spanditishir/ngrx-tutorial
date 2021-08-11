import { createReducer, on } from "@ngrx/store";
import { initialState } from "src/app/posts/store/posts.store";
import { addPost } from "./posts.action";
const _createReducer = createReducer(
    initialState,
    // on(getPosts, (state) => {

    //     return { ...state }
    // }),
    on(addPost, (state, action) => {
        const post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        return { ...state, posts: [...state.posts, post] }
    }));
export function PostReducer(state: any, action: any) {
    return _createReducer(state, action);
}