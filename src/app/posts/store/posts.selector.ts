import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "src/app/models/post";
import { PostState } from "./posts.store";
export const POST_STATE_NAME="post";
const postFeatureSelector = createFeatureSelector<PostState>(POST_STATE_NAME);
export const getPosts = createSelector(postFeatureSelector, state => state.posts);
export const getPost = createSelector(postFeatureSelector, (state:any, props:any) => {
    return state.posts.find((p:Post)=>p.id===props.id)
});