import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { addPost, editPost } from '../store/posts.action';
import {take} from "rxjs/operators";
import { getPost } from '../store/posts.selector';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postFormGroup: FormGroup;
  params$ :Params | null
  buttonLable = "Save";
  constructor(
    private router:Router,
    private fb: FormBuilder,
    private activatedRoute : ActivatedRoute,
    private store: Store<AppState>) {
    this.postFormGroup = fb.group({
      id:null,
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(3)]]
    });
    this.params$ = null;
    this.router.routeReuseStrategy.shouldReuseRoute=()=>{
      return false;
    }
  }

  ngOnInit(): void {
    this.params$ = this.activatedRoute.params.pipe(take(1)).subscribe((params:Params)=>{
      if(params.id)
      {
        this.buttonLable ="Update";
        const id = params.id;
        this.store.select(getPost, {id} ).subscribe((post:Post)=>{

          this.postFormGroup.patchValue(post);
        })
      }
    });
  }
  addPost() {
    if (!this.postFormGroup.valid) {
      return;
    } else {
      const post = this.postFormGroup.value;
      if(!post.id)
      {
        this.store.dispatch(addPost({ post }));
        
      }else{
        this.store.dispatch(editPost(post));
        this.router.navigate(['/posts/add/post'])
      }
      this.postFormGroup.reset();      
    }
  }

}
