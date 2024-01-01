import { createReducer, on } from "@ngrx/store";
import { pokemonDescription } from "src/app/pages/collection/models/collection.models";
import { collectionApiActions } from "../actions";

export interface PokemonDetailState{
	pokemonFullDescriptionCollection: pokemonDescription[];
	error?: string;
}
export const initialState: PokemonDetailState = ({
	pokemonFullDescriptionCollection: []
});

export const reducer = createReducer(
	initialState,
	on(
		collectionApiActions.getPokemonByNameSuccess,
		(state: PokemonDetailState, action) => {
			return { 
				...state, 
				pokemonFullDescriptionCollection: [...state.pokemonFullDescriptionCollection, action.singlePokemonItem]
			};
		}
	),
	on(
		collectionApiActions.changePokemonDetails,
		(state: PokemonDetailState, { itemId, changes }) => ({
			...state,
			pokemonFullDescriptionCollection: state.pokemonFullDescriptionCollection.map(item => 
			  item.id === itemId ? { ...item, ...changes } : item
			)
		  }),
	),
	on(
		collectionApiActions.getPokemonByNameFailure,
		(state: PokemonDetailState, action) => ({
			...state,
			error: action.error
		  }),
	),
);

export const selectAll  = (state: PokemonDetailState) => state.pokemonFullDescriptionCollection;