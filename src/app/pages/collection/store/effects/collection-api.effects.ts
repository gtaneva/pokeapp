import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { collectionApiActions } from "../actions";
import { HttpErrorResponse } from '@angular/common/http';
import { CollectionService } from "../../services/collection.service";
import { pokemonCollection } from "../../models/collection.models";

@Injectable()
export class CollectionApiEffects {
	public loadArticles$ = createEffect(() =>
		this.actions$.pipe(
			ofType(collectionApiActions.getPokemons),
			switchMap(() =>
				this.collectionApiService.getPokemons().pipe(
					map((response) =>{
						const pokemons: pokemonCollection['results'] = response.results.map(pokemon => {
							const urlSegments = pokemon.url.split('/');
							const id = urlSegments[urlSegments.length - 2];
							return { ...pokemon, id };
					});
                    return collectionApiActions.loadPokemonsSuccess({ pokemons })
					}),
					catchError((error: HttpErrorResponse) =>
						of(collectionApiActions.loadPokemonsFailure(error.message))
					)
				)
			)
		)
	);

	public getSinglePokemonItemByName$ = createEffect(() =>
		this.actions$.pipe(
			ofType(collectionApiActions.getPokemonByName),
			switchMap((action) =>
				this.collectionApiService.getPokemonByName(action.name).pipe(
					map((singlePokemonItem) =>
					collectionApiActions.getPokemonByNameSuccess({ singlePokemonItem })
					),
					catchError((error: HttpErrorResponse) =>
						of(collectionApiActions.getPokemonByNameFailure(error.message))
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

