import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'counter', loadChildren: () => import('../app/counter/counter.module').then(m => m.CounterModule)
},
{
  path: "posts",
  loadChildren: () => import("../app/posts/posts.module").then(m => m.PostsModule)
},
{
  path:"login",
  loadChildren:()=>import("../app/auth/auth.module").then((m=>m.AuthModule))
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
