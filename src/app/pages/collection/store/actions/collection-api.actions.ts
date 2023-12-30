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

export const getPokemonByName = createAction(
	'[Pokemons/View Pokemon Page] Get Pokemon By Name',
	props<{ name: string | null }>()
);

export const getPokemonByNameSuccess = createAction(
	'[Pokemons/View Pokemon Page] Get Pokemon By Name Success',
	props<{ singlePokemonItem: pokemonDescription }>()
);

export const getPokemonByNameFailure = createAction(
	'[Pokemons/View Pokemon Page] Get Pokemon By Name Failure',
	(error?: string) => ({ error })
);

export const changePokemonDetails = createAction(
	'[Pokemons/View Pokemon Page] Change Pokemon Details',
	props<{ itemId: string | undefined, changes: Partial<pokemonDescription> }>()
);