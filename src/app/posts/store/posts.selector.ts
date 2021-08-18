import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "src/app/models/post";
import { PostState } from "./posts.store";
const postFeatureSelector = createFeatureSelector<PostState>("post");
export const getPosts = createSelector(postFeatureSelector, state => state.posts);
export const getPost = createSelector(postFeatureSelector, (state:any, props:any) => {
    return state.posts.find((p:Post)=>p.id===props.id)
});