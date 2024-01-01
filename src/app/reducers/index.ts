import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { hydrationMetaReducer } from "./hydration.reducer";

import {
	MetaReducer,
} from '@ngrx/store';

export type State = {
	router: fromRouter.RouterReducerState<any>;
};

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];

export const { selectRouteData } = fromRouter.getRouterSelectors();
