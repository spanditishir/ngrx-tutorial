import { createAction, props } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const LOGIN_STRAT="[auth page] login start";
export const LOGIN_SUCCESS="[auth page] login success";
export const LOGIN_FAIL="[auth page] login fail";

export const loginStart = createAction(LOGIN_STRAT,props<{username:string,password:string}>());
export const loginSuccess = createAction(LOGIN_SUCCESS);