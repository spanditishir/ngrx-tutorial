import {createAction, props} from "@ngrx/store";
import { Post } from "src/app/models/post";
export const addPost = createAction('[add-post] add post',props<{post:Post}>());
export const editPost = createAction('[add-post] edit post',props<Post>());
export const deletePost = createAction('[posts] delete post',props<{post:Post}>());