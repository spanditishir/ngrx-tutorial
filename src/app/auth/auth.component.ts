import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loginStart } from './state/auth.action';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private store:Store<AppState>,
    private fb: FormBuilder) {
    this.loginForm = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  login() {
    this.store.dispatch(loginStart({username:this.loginForm.value.username,password:this.loginForm.value.password}));
  }
}
