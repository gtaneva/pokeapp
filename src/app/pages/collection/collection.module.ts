import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';
import { PokemonItemComponent } from '../components/pokemon-item/pokemon-item.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { StoreModule } from '@ngrx/store';
import { ReducerFeatureKeys } from './constants/collection.constants';
import * as fromCollection from './store/reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { CollectionApiEffects } from './store/effects/collection-api.effects';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { PokemonDetailComponent } from './ui/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './ui/pokemon-list/pokemon-list.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { EditPokemonComponent } from './ui/edit-pokemon/edit-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

const components = [CollectionComponent, PokemonItemComponent, PokemonListComponent, PokemonDetailComponent, ];
@NgModule({
  declarations: [
    components,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    NzLayoutModule,
    NzGridModule,
    NzCardModule,
    NzTypographyModule,
    NzListModule,
    NzSpaceModule,
    NzIconModule,
    NzImageModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    StoreModule.forFeature(
      'pokemons',
      fromCollection.reducers
    ),
    EffectsModule.forFeature([CollectionApiEffects])
  ]
})
export class CollectionModule { }
