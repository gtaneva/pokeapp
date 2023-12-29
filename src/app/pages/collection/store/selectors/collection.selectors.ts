import { createSelector } from '@ngrx/store';
import * as fromCollectionState from '../reducers/collection.reducer';
import { getCollectionState, selectFeature } from '../reducers';

export const selectPokemonState = createSelector(
	selectFeature,
	getCollectionState
);

export const selectAllPokemons = createSelector(
	selectPokemonState,
	fromCollectionState.selectAll
);

export const selectError = createSelector(
	selectPokemonState,
	(state) => state.error
);