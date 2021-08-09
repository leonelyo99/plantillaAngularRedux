import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './actions/counter.actions';
import { AppState } from './interfaces/app.reducers.interface';
import { INITIAL_COUNTER_STATE } from './constants/initial.state.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter: number = INITIAL_COUNTER_STATE;

  constructor(private store: Store<AppState>) {
    /**
     * subscribe to the store changes
     * .select = you can select a specific store, without the select, it brings all the stores
     */
    this.store.select('counter').subscribe((counter) => {
      this.counter = counter;
    });
  }

  increase() {
    this.store.dispatch(actions.increase());
  }

  decrease() {
    this.store.dispatch(actions.decrease());
  }
}
