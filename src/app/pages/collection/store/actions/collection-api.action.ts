import { createAction, props } from "@ngrx/store";
import { pokemonCollection } from "../../models/collection.models";

export const getPokemons = createAction('[Pokemons/API] Get Pokemons');

export const loadPokemonsSuccess = createAction(
	'[Pokemons/API] Get Pokemons Success',
	props<{ pokemons: pokemonCollection['results'] }>()
);

export const loadPokemonsFailure = createAction(
	'[Pokemons/API] Get Pokemons Failure',
	(error?: string) => ({ error })
);

export const selectPokemon = createAction(
	'[Pokemons/View Pokemon Page] Select Pokemon',
	props<{ name: string }>()
);