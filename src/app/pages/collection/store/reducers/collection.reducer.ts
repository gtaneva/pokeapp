import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { collectionApiActions } from '../actions';

export interface PokemonCollectionState extends EntityState<Pokemon> {
	error?: string;
	articlesLoaded: boolean;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>();

export const initialState: PokemonCollectionState = adapter.getInitialState({
	articlesLoaded: false,
	message: '',
});

export const reducer = createReducer(
	initialState,
	on(
		collectionApiActions.loadPokemonsSuccess,
		(state: PokemonCollectionState, action) => {
			return adapter.setAll(action.articles.data.articles, {
                ...state
            });
		}
	),
	on(
		articlesSharedActions.addArticleFailure,
		(state: PokemonCollectionState, action) => {
			return {
				...state,
				error: action.error,
			};
		}
	)
);

export const { selectAll } = adapter.getSelectors();
