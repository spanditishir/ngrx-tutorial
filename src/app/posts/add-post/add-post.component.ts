import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { addPost } from '../store/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private store:Store<AppState>) {
    this.postFormGroup = fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }
  addPost()
  {
    if(!this.postFormGroup.valid)
    {
      return ;
    }else{
      const post =this.postFormGroup.value;
      this.store.dispatch(addPost({post}));
      this.postFormGroup.reset();
    }
    
  }

}
