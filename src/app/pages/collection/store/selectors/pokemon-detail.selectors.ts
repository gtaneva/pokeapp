import { createSelector } from "@ngrx/store";
import { getPokemonDetailState, selectFeature } from "../reducers";
import * as fromPokemonDetailState from '../reducers/pokemon-detail.reducer';

export const selectPokemonDetailedState = createSelector(
	selectFeature,
	getPokemonDetailState
);

export const selectAllPokemonsWithDetails = createSelector(
	selectPokemonDetailedState,
	fromPokemonDetailState.selectAll
);

export const selectPokemonByName = (params: string) =>
	createSelector(selectAllPokemonsWithDetails, (pokemons) =>
		pokemons.find((pokemon) => pokemon.name === params)
);