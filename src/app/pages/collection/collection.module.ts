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

const components = [CollectionComponent, PokemonItemComponent];
@NgModule({
  declarations: [
    components
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
    StoreModule.forFeature(
      ReducerFeatureKeys.Collection,
      fromCollection.reducers
    ),
    EffectsModule.forFeature([CollectionApiEffects])
  ]
})
export class CollectionModule { }
