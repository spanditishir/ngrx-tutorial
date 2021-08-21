import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter.component";
import { CustomCounterComponent } from "./custom-counter/custom-counter.component";
import { counterReducer } from "./store/counter.reducer";

const routes: Routes = [{
    path: '',
    component: CounterComponent
}];
@NgModule({
    declarations: [CounterComponent, CounterButtonComponent, CounterOutputComponent, CustomCounterComponent],
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes), StoreModule.forFeature("nikhil", counterReducer)],
})
export class CounterModule { }