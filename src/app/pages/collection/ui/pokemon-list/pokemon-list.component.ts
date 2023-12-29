import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private store: Store<PokemonCollectionState>){}

  ngOnInit(){
    this.store.dispatch(getPokemons());
    this.pokemonCollection$ = this.store.select(selectAllPokemons);
  }
}
