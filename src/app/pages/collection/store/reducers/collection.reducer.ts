import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { collectionApiActions } from '../actions';
import {pokemonCollection, pokemonDescription} from '../../models/collection.models';

export interface PokemonCollectionState{
	pokeCollection: pokemonCollection['results'];
	pokemonFullDescriptionCollection: pokemonDescription[];
	error?: string;
}


export const initialState: PokemonCollectionState = ({
	pokeCollection: [],
	pokemonFullDescriptionCollection: []
});

export const reducer = createReducer(
	initialState,
	on(
		collectionApiActions.loadPokemonsSuccess,
		(state: PokemonCollectionState, action) => {
			return { ...state, pokeCollection: action.pokemons.results };
		}
	),
	on(
		collectionApiActions.getPokemonByNameSuccess,
		(state: PokemonCollectionState, action) => {
			return { 
				...state, 
				pokemonFullDescriptionCollection: [...state.pokemonFullDescriptionCollection, action.singlePokemonItem]
			};
		}
	),
);

export const selectAll  = (state: PokemonCollectionState) => state.pokeCollection;