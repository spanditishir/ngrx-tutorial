import { Component, Inject, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { custom, modifyName } from 'src/app/counter/store/counter.action';
import { getUserName } from 'src/app/counter/store/counter.selector';
import { CounterState } from 'src/app/counter/store/counter.store';
@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent implements OnInit {
  customCounter: number = 0;
  userName: string = '';
  constructor(
    private store: Store<{ nikhil: CounterState }>) { }

  ngOnInit(): void {
    this.store.select(getUserName).subscribe((userName) => {
      this.userName = userName;
      console.log("Displayed the username successfully...")
    })
  }
  customIncrementOrDecrment() {
    this.store.dispatch(custom({ value: +this.customCounter }))

  }
  changeName()
  {
    this.store.dispatch(modifyName({userName:"Shashikant Pandit"}))
  }

}
