
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';
import * as pokemonConstants from '../../constants/collection.constants';
import * as fromCollection from '../reducers/collection.reducer';
import * as fromRoot from '../../../../reducers/index';
import * as fromPokemonDetail from '../reducers/pokemon-detail.reducer';

export type FeatureState = {
	[pokemonConstants.ReducerFeatureKeys.Collection]: fromCollection.PokemonCollectionState;
	[pokemonConstants.ReducerFeatureKeys.PokemonDetails]: fromPokemonDetail.PokemonDetailState;
};

export type State = fromRoot.State & {
	[pokemonConstants.ReducerFeatureKeys.Collection]: fromCollection.PokemonCollectionState;
	[pokemonConstants.ReducerFeatureKeys.PokemonDetails]: fromPokemonDetail.PokemonDetailState;
};

export function reducers(state: FeatureState | undefined, action: Action) {
	return combineReducers({
		[pokemonConstants.ReducerFeatureKeys.Collection]:
        fromCollection.reducer,
		[pokemonConstants.ReducerFeatureKeys.PokemonDetails]:
        fromPokemonDetail.reducer,
	})(state, action);
}

export const selectFeature = createFeatureSelector<FeatureState>('pokemons');

export const selectPokemonsState = createFeatureSelector<FeatureState>(
	pokemonConstants.ReducerFeatureKeys.Collection
);

export const selectPokemonsDetailState = createFeatureSelector<FeatureState>(
	pokemonConstants.ReducerFeatureKeys.PokemonDetails
);

export const getCollectionState = (state: FeatureState) =>
	state[pokemonConstants.ReducerFeatureKeys.Collection];

export const getPokemonDetailState = (state: FeatureState) =>
state[pokemonConstants.ReducerFeatureKeys.PokemonDetails];