import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { decrement, increment, reset } from 'src/app/counter/store/counter.action';
import { CounterState } from 'src/app/counter/store/counter.store';
@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store:Store<{nikhil:CounterState}>) { }

  ngOnInit(): void {
  }
  increment(){
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }

}
