
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';
import * as pokemonConstants from '../../constants/collection.constants';
import * as fromCollection from '../reducers/collection.reducer';
import * as fromRoot from '../../../../reducers/index';

export type FeatureState = {
	[pokemonConstants.ReducerFeatureKeys.Collection]: fromCollection.PokemonCollectionState;
};

export type State = fromRoot.State & {
	[pokemonConstants.ReducerFeatureKeys.Collection]: FeatureState;
};

export function reducers(state: FeatureState | undefined, action: Action) {
	return combineReducers({
		[pokemonConstants.ReducerFeatureKeys.Collection]:
        fromCollection.reducer,
	})(state, action);
}

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `articles` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 *   constructor(state$: Observable<State>) {
 *     this.articlesState$ = state$.pipe(select(getArticlesState));
 *   }
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectPokemonsState = createFeatureSelector<FeatureState>(
	pokemonConstants.ReducerFeatureKeys.Collection
);

export const getCollectionState = (state: FeatureState) =>
	state[pokemonConstants.ReducerFeatureKeys.Collection];