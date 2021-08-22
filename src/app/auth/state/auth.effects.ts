import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, mergeMap, map } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess } from "./auth.action";
@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) {

    }
    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.username, action.password)
                    .pipe(
                        map((data: any) => {
                            return loginSuccess();
                        })
                    );
            })
        )

    });
}