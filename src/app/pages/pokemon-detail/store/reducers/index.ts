import * as pokemonConstants from '../../../collection/constants/collection.constants';
import * as fromPokemonDetail from '../reducers/pokemon-detail.reducer';
import * as fromRoot from '../../../../reducers/index';
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

export type FeatureState = {
	[pokemonConstants.ReducerFeatureKeys.PokemonDetails]: fromPokemonDetail.PokemonDetailState;
};

export type State = fromRoot.State & {
	[pokemonConstants.ReducerFeatureKeys.PokemonDetails]: FeatureState;
};

export function reducers(state: FeatureState | undefined, action: Action) {
	return combineReducers({
		[pokemonConstants.ReducerFeatureKeys.PokemonDetails]:
        fromPokemonDetail.reducer,
	})(state, action);
}

export const selectPokemonsDetailState = createFeatureSelector<FeatureState>(
	pokemonConstants.ReducerFeatureKeys.PokemonDetails
);

export const getPokemonDetailState = (state: FeatureState) =>
	state[pokemonConstants.ReducerFeatureKeys.PokemonDetails];