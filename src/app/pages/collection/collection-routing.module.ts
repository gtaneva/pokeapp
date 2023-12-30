import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { PokemonDetailComponent } from './ui/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './ui/pokemon-list/pokemon-list.component';
import { EditPokemonComponent } from './ui/edit-pokemon/edit-pokemon.component';

const routes: Routes = [
  {
		path: '',
		component: CollectionComponent,
    title: 'Pokemons',
    children: [
      {
        path: '',
        redirectTo: 'collection',
        pathMatch: 'full'
      },
      {
        path: 'collection',
        component: PokemonListComponent,
        title: "Pokemon Collection",
      },
      {
          path: ':name',
          component: PokemonDetailComponent,
          title: "Pokemon Details"
      },
      {
        path: 'edit/:name',
        component: EditPokemonComponent,
        title: "Edit Pokemon"
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
