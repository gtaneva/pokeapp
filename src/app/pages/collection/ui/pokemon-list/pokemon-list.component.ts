import { Component } from '@angular/core';
import { Observable, of, tap, switchMap } from 'rxjs';
import { pokemonCollection } from '../../models/collection.models';
import { PokemonCollectionState } from '../../store/reducers/collection.reducer';
import { Store } from '@ngrx/store';
import { getPokemons } from '../../store/actions/collection-api.actions';
import { selectAllPokemons } from '../../store/selectors/collection.selectors';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  public pokemonCollection$: Observable<pokemonCollection['results']> | undefined;
  public isLoading: boolean = false;

  constructor(private store: Store<PokemonCollectionState>){}

  ngOnInit(){
    this.getPokemonCollection();
  }

  getPokemonCollection(){
    this.pokemonCollection$ = this.store.select(selectAllPokemons).pipe(
      tap((data) => {
        if (data.length === 0) {
          this.store.dispatch(getPokemons());
        }
      }),
      switchMap((data) => of(data))
    )
  }
}
