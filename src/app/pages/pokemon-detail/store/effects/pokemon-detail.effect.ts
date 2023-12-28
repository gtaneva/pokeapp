import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { pokemonDetailActions } from "../actions";
import { HttpErrorResponse } from "@angular/common/http";
import { CollectionService } from "src/app/pages/collection/services/collection.service";

@Injectable()
export class PokemonDetailEffects {
	public getSinglePokemonItemByName$ = createEffect(() =>
		this.actions$.pipe(
			ofType(pokemonDetailActions.getPokemonByName),
			switchMap((action) =>
				this.collectionApiService.getPokemonByName(action.name).pipe(
					map((singlePokemonItem) =>
					pokemonDetailActions.getPokemonByNameSuccess({ singlePokemonItem })
					),
					catchError((error: HttpErrorResponse) =>
						of(pokemonDetailActions.getPokemonByNameFailure(error.message))
					)
				)
			)
		)
	);

	public constructor(
		protected actions$: Actions,
		protected collectionApiService: CollectionService
	) {}
}
