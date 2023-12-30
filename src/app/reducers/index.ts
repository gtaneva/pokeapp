import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { hydrationMetaReducer } from "./hydration.reducer";

import {
	Action,
	ActionReducer,
	ActionReducerMap,
	MetaReducer,
} from '@ngrx/store';

export type State = {
	router: fromRouter.RouterReducerState<any>;
};

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];
export const rootReducers = new InjectionToken<ActionReducerMap<State, Action>>(
	'Root reducers token',
	{
		factory: () => ({
			router: fromRouter.routerReducer,
		}),
	}
);

export const { selectRouteData } = fromRouter.getRouterSelectors();
