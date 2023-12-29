import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { 
    path: 'home', 
    component: HomeComponent
  },
  {
    path: "pokemons",
    loadChildren: () =>
			import('./pages/collection/collection.module').then((m) => m.CollectionModule)
  },
  {
		path: '**',
		component: PageNotFoundComponent,
		title: "Page not found",
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
