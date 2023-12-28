import { createReducer, on } from "@ngrx/store";
import { pokemonDescription } from "src/app/pages/collection/models/collection.models";
import { pokemonDetailActions } from "../actions";

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
		pokemonDetailActions.getPokemonByNameSuccess,
		(state: PokemonDetailState, action) => {
			return { 
				...state, 
				pokemonFullDescriptionCollection: [...state.pokemonFullDescriptionCollection, action.singlePokemonItem]
			};
		}
	),
);

export const selectAll  = (state: PokemonDetailState) => state.pokemonFullDescriptionCollection;