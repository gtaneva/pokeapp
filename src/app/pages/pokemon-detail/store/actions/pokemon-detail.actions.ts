import { createAction, props } from "@ngrx/store";
import { pokemonDescription } from "src/app/pages/collection/models/collection.models";

export const getPokemonByName = createAction(
	'[Pokemons/View Pokemon Page] Get Pokemon By Name',
	props<{ name: string }>()
);

export const getPokemonByNameSuccess = createAction(
	'[Pokemons/View Pokemon Page] Get Pokemon By Name Success',
	props<{ singlePokemonItem: pokemonDescription }>()
);

export const getPokemonByNameFailure = createAction(
	'[Pokemons/View Pokemon Page] Get Pokemon By Name Failure',
	(error?: string) => ({ error })
);