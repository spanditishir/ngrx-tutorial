import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from '../posts/add-post/add-post.component';
import { PostsComponent } from '../posts/posts.component';
import { PostReducer } from "./store/posts.reducer";

const routes: Routes = [
    {
        path: "",
        component: PostsComponent,
        children: [
            {
                path: 'add/post',
                component: AddPostComponent
            }, {
                path: 'edit/post/:id',
                component: AddPostComponent
            }
        ]
    }
]
@NgModule({
    declarations: [AddPostComponent, PostsComponent],
    imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule, StoreModule.forFeature("post", PostReducer)]
})
export class PostsModule { }