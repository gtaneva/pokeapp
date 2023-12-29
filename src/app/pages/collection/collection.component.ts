import { Component, OnDestroy, OnInit } from '@angular/core';
import { CollectionService } from './services/collection.service';
import { pokemonCollection, pokemonDescription } from './models/collection.models';
import { Store, select } from '@ngrx/store';
import { PokemonCollectionState } from './store/reducers/collection.reducer';
import { getPokemons } from './store/actions/collection-api.actions';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { selectAllPokemons } from './store/selectors/collection.selectors';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent{

}
