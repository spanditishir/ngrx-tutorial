import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [{
  path:'counter', component:CounterComponent
},{
  path:'posts', component:PostsComponent,
  children:[{
    path:'add/post',
    component:AddPostComponent
  },{
    path:'edit/post/:id',
    component:AddPostComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
