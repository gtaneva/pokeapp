import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { collectionApiActions } from "../actions";
import { HttpErrorResponse } from '@angular/common/http';
import { CollectionService } from "../../services/collection.service";

@Injectable()
export class CollectionApiEffects {
	// public loadArticles$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(collectionApiActions.getPokemons),
	// 		switchMap(() =>
	// 			this.articlesApiService.retrieveArticles().pipe(
	// 				map((pokemons) =>
    //                 collectionApiActions.loadPokemonsSuccess({ pokemons })
	// 				),
	// 				catchError((error: HttpErrorResponse) =>
	// 					of(collectionApiActions.loadPokemonsFailure(error.message))
	// 				)
	// 			)
	// 		)
	// 	)
	// );

	// public getSingleArticleById$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(articlesApiActions.getArticleById),
	// 		switchMap((action) =>
	// 			this.articlesApiService.retrieveArticle(action.id).pipe(
	// 				map((article) =>
	// 					articlesApiActions.getArticleByIdSuccess({ article })
	// 				),
	// 				catchError((error: HttpErrorResponse) =>
	// 					of(articlesApiActions.getArticleByIdFailure(error.message))
	// 				)
	// 			)
	// 		)
	// 	)
	// );

	// public editArticle$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(editArticle),
	// 		switchMap((action) =>
	// 			this.articlesApiService
	// 				.updateSingleArticle(action.id, action.article)
	// 				.pipe(
	// 					map((action) =>
	// 						articlesApiActions.editArticleSuccess({
	// 							id: action.data.id,
	// 							changes: action.data,
	// 						})
	// 					),
	// 					catchError((error) =>
	// 						of(
	// 							articlesApiActions.editArticleFailure({
	// 								error: error.message,
	// 							})
	// 						)
	// 					)
	// 				)
	// 		)
	// 	)
	// );

	public constructor(
		protected actions$: Actions,
		protected collectionApiService: CollectionService
	) {}
}

