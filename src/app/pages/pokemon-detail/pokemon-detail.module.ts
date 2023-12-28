import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { StoreModule } from '@ngrx/store';
import { ReducerFeatureKeys } from '../collection/constants/collection.constants';
import { EffectsModule } from '@ngrx/effects';
import * as fromCollection from './store/reducers/index';
import { PokemonDetailEffects } from './store/effects/pokemon-detail.effect';

const  components = [PokemonDetailComponent]
@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
    StoreModule.forFeature(
      ReducerFeatureKeys.PokemonDetails,
      fromCollection.reducers
    ),
    EffectsModule.forFeature([PokemonDetailEffects])
  ]
})
export class PokemonDetailModule { }
