import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { changePokemonDetails, getPokemonByName } from '../../store/actions/collection-api.actions';
import { PokemonDetailState } from '../../store/reducers/pokemon-detail.reducer';
import { selectPokemonByName } from '../../store/selectors/pokemon-detail.selectors';
import { pokemonDescription } from '../../models/collection.models';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent {
  public pokemonName: string | null;
  public pokemonDetails: pokemonDescription | undefined;

  constructor(private route: ActivatedRoute, 
    private store: Store<PokemonDetailState>, 
    private message: NzMessageService,
    private router: Router) {}

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
    this.getPokemonDetails();
  }

  getPokemonDetails() {
    if (!this.pokemonName) {
      return;
    }
    this.store.select(selectPokemonByName(this.pokemonName)).pipe(
      tap((data) => {
        if (!data) {
          this.store.dispatch(getPokemonByName({ name: this.pokemonName }));
        }
      })
    ).subscribe({
      next: (val) => {
        this.pokemonDetails = val ? { ...val } : undefined;
      }
      
    });
  }

  deleteAbilityItem(abilityName: string) {
    if (!this.pokemonDetails) {
      return;
    }

    if (!abilityName || !this.pokemonDetails.abilities) {
      return;
    }

    this.pokemonDetails = {
      ...this.pokemonDetails,
      abilities: this.pokemonDetails.abilities.filter(
        ability => ability.ability.name !== abilityName
      )
    };
  }

  deleteMoveItem(moveName: string) {
    if (!this.pokemonDetails) {
      return;
    }

    if (!moveName || !this.pokemonDetails.moves) {
      return;
    }

    this.pokemonDetails = {
      ...this.pokemonDetails,
      moves: this.pokemonDetails.moves.filter(move => move.move.name !== moveName)
    };
  }

  saveUpdatedData() {
    if (!this.pokemonDetails) {
      return;
    }

    this.store.dispatch(changePokemonDetails({
      itemId: this.pokemonDetails.id,
      changes: { ...this.pokemonDetails }
    }));

    this.message.create('success', `Your changes are saved!`);
    this.router.navigate(['/pokemons', this.pokemonDetails.name])
  }
}
