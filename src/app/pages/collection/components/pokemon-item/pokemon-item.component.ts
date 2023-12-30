import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent{
  @Input() pokemonName: string | undefined;
  @Input() pokemonId: string | undefined;
}
