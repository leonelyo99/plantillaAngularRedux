import { createReducer, on } from '@ngrx/store';
import { increase, decrease, multiply, divide, reset } from '../actions/counter.actions';
import { INITIAL_COUNTER_STATE } from '../constants/initialState.constant';

/**
 * reduce where the state modification is performed
 */
const _counterReducer = createReducer(
    INITIAL_COUNTER_STATE,
    on(increase, (state) => state + 1),
    on(decrease, (state) => state - 1),
    on(multiply, (state, { number }) => state * number),
    on(divide, (state, { number }) => state / number),
    on(reset, () => INITIAL_COUNTER_STATE)
);

export function counterReducer(state: number | undefined, action: any) {
    return _counterReducer(state, action)
}