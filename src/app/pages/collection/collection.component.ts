import { Component, OnDestroy, OnInit } from '@angular/core';
import { CollectionService } from './services/collection.service';
import { pokemonCollection, pokemonDescription } from './models/collection.models';
import { Store, select } from '@ngrx/store';
import { PokemonCollectionState } from './store/reducers/collection.reducer';
import { getPokemonByName, getPokemons } from './store/actions/collection-api.action';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { selectAllPokemons } from './store/selectors/collection.selectors';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy{
  public pokemonCollection$: Observable<pokemonCollection['results']> | undefined;
  public pokemonDetailedCollection$: Observable<pokemonDescription[]> | undefined;

  private destroy$ = new Subject<void>();

  constructor(private store: Store<PokemonCollectionState>){
    this.store.dispatch(getPokemons());
    this.pokemonCollection$ = this.store.select(selectAllPokemons);
  }

  ngOnInit(){
    this.pokemonCollection$?.pipe(
      takeUntil(this.destroy$)).subscribe(data => {
      if(data){
        this.getDetailedPokemonInformation(data)
      }
    })
  }

  getDetailedPokemonInformation(data: pokemonCollection['results']){
    data.forEach(e => this.store.dispatch(getPokemonByName({name: e.name})))
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
