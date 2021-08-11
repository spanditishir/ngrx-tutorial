import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.store";
const postFeatureSelector = createFeatureSelector<PostState>("post");
export const getPosts = createSelector(postFeatureSelector, state => state.posts);