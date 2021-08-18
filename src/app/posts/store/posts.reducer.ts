import { createReducer, on } from "@ngrx/store";
import { initialState } from "src/app/posts/store/posts.store";
import { addPost, deletePost, editPost } from "./posts.action";
const _createReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        const post = { ...action.post };
        post.id = (state.posts.length + 1).toString();
        return { ...state, posts: [...state.posts, post] }
    }),
    on(editPost, (state, action) => {
        const updatedPosts = state.posts.map(post => post.id === action.id ? action : post)
        return { ...state, posts: updatedPosts }
    }),
    on(deletePost,(state,action)=>{
        return {...state, posts:state.posts.filter(p=>p.id!==action.post.id)}
    }));
export function PostReducer(state: any, action: any) {
    return _createReducer(state, action);
}