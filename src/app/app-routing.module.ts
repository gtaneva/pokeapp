import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/collection' },
  {
    path: "collection",
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
