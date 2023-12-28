
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

export const selectPokemonsState = createFeatureSelector<FeatureState>(
	pokemonConstants.ReducerFeatureKeys.Collection
);

export const getCollectionState = (state: FeatureState) =>
	state[pokemonConstants.ReducerFeatureKeys.Collection];