import { Component, OnDestroy, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { getCounter } from 'src/app/counter/store/counter.selector';
import { CounterState } from 'src/app/counter/store/counter.store';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter: number=0;
  counterSubscription:any;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
   this.counterSubscription = this.store.select(getCounter).subscribe(data=>{
     console.log("Displayed the counter successfully...")
      this.counter=data;
    })
  }
  ngOnDestroy()
  {
    if(this.counterSubscription)
    {
      this.counterSubscription.unsubscribe();
    }
  }

}
