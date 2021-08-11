import {createAction, props} from "@ngrx/store";
import { Post } from "src/app/models/post";
//export const getPosts = createAction('getPosts');
export const addPost = createAction('[add-post] add post',props<{post:Post}>());