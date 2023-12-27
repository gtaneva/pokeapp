import { Component, OnInit } from '@angular/core';
import { CollectionService } from './services/collection.service';
import { pokemonCollection } from './models/collection.models';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit{
  public pokemonCollection: pokemonCollection['results'] = [];

  constructor(private collectionService: CollectionService){}

  ngOnInit(){
    // this.collectionService.getPokemons().subscribe({
    //   next: val => console.log(val)
    // })

    this.collectionService.getPokemonByName("bulbasaur").subscribe({
      next: val => console.log(val)
    })
  }

}
