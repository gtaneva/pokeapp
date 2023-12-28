import { createAction, props } from "@ngrx/store";
import { pokemonCollection, pokemonDescription } from "../../models/collection.models";

export const getPokemons = createAction('[Pokemons/API] Get Pokemons');

export const loadPokemonsSuccess = createAction(
	'[Pokemons/API] Get Pokemons Success',
	props<{ pokemons: pokemonCollection['results']}>()
);

export const loadPokemonsFailure = createAction(
	'[Pokemons/API] Get Pokemons Failure',
	(error?: string) => ({ error })
);