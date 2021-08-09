import { createAction, props } from '@ngrx/store';

/**
 * here the actions to send to the reducer are created, parameters can be sent through props
*/
export const increase = createAction('[Counter] Increase');
export const decrease = createAction('[Counter] Decrease');
export const multiply = createAction(
    '[Counter] Multiply',
    props<{ number: number }>()
);
export const divide = createAction(
    '[Counter] Divide',
    props<{ number: number }>()
);
export const reset = createAction('[Counter] Reset');


