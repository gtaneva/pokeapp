import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap, take, tap } from 'rxjs';
import { pokemonDescription } from '../../models/collection.models';
import { Store, select } from '@ngrx/store';
import { PokemonDetailState } from '../../store/reducers/pokemon-detail.reducer';
import { selectAllPokemonsWithDetails, selectPokemonByName } from '../../store/selectors/pokemon-detail.selectors';
import { getPokemonByName } from '../../store/actions/collection-api.actions';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit{
  public pokemonName: string | null;
  public pokemonDetails$:  Observable<pokemonDescription | undefined>;

  constructor(private route: ActivatedRoute, private store: Store<PokemonDetailState>){}

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
    this.getPokemonDetails();
  }

  getPokemonDetails() {
		// this.pokemonDetails$ = this.store.pipe(
		// 	select(selectPokemonByName(this.pokemonName as string)),
		// 	tap((pokemon) => {
		// 		if (pokemon === undefined || pokemon === null) {
		// 			this.store.dispatch(getPokemonByName({ name: this.pokemonName }));
		// 			this.store.select(selectPokemonByName(this.pokemonName as string));
		// 		}
		// 	})
		// );

    this.pokemonDetails$ = this.store.select(selectPokemonByName(this.pokemonName as string)).pipe(
      tap((data) => {
        if (!data) {
          this.store.dispatch(getPokemonByName({ name: this.pokemonName }));
        }
      }),
      switchMap((data) => of(data))
    )
	}
}
