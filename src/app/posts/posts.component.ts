import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../app.state';
import { Post } from '../models/post';
import { getPosts } from './store/posts.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$ : Observable<Post[]>;
  posts: any;
  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(getPosts);
  }

  ngOnInit(): void {
  }

}
