import { Post } from "../../models/post";
export interface PostState {
    posts: Post[]
}
export const initialState: PostState = {
    posts: [{ id: '1', title: "Test Title", description: "Title description" }]
}