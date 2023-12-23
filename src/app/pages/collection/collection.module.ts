import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';
import { PokemonItemComponent } from '../components/pokemon-item/pokemon-item.component';

const components = [CollectionComponent, PokemonItemComponent];
@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ]
})
export class CollectionModule { }
