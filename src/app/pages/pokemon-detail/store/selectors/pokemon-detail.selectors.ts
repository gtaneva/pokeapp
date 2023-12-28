import { createSelector } from "@ngrx/store";
import { getPokemonDetailState, selectPokemonsDetailState } from "../reducers";
import * as fromPokemonDetailState from '../reducers/pokemon-detail.reducer';

export const selectPokemonState = createSelector(
	selectPokemonsDetailState,
	getPokemonDetailState
);

export const selectAllPokemons = createSelector(
	selectPokemonState,
	fromPokemonDetailState.selectAll
);