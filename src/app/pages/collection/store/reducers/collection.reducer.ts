import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { collectionApiActions } from '../actions';
import {pokemonCollection, pokemonDescription} from '../../models/collection.models';

export interface PokemonCollectionState{
	pokeCollection: pokemonCollection['results'];
	error?: string;
}

export const initialState: PokemonCollectionState = ({
	pokeCollection: [],
});

export const reducer = createReducer(
	initialState,
	on(
		collectionApiActions.loadPokemonsSuccess,
		(state: PokemonCollectionState, action) => {
			return { ...state, pokeCollection: action.pokemons };
		}
	),
);

export const selectAll  = (state: PokemonCollectionState) => state.pokeCollection;