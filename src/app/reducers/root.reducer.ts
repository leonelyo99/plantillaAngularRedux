import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
export interface RootState {
    counter: number
}

/**
 * combination of reducers
 */
export const appReducers: ActionReducerMap<RootState> = {
    counter: counterReducer
}
