import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit{
  @Input() pokemonName: string | undefined;
  @Input() pokemonId: string | undefined;

ngOnInit(): void {
  console.log(this.pokemonName)
}
}
