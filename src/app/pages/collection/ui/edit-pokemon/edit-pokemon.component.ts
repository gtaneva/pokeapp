import { Component } from '@angular/core';
import { of, switchMap, tap } from 'rxjs';
import { pokemonDescription } from '../../models/collection.models';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PokemonDetailState } from '../../store/reducers/pokemon-detail.reducer';
import { selectPokemonByName } from '../../store/selectors/pokemon-detail.selectors';
import { changePokemonDetails, getPokemonByName } from '../../store/actions/collection-api.actions';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent {
  public pokemonName: string | null;
  public pokemonDetails:  pokemonDescription |undefined;
  public height: number;
  public weight: number;

  constructor(private route: ActivatedRoute, private store: Store<PokemonDetailState>){}

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
    this.getPokemonDetails();;
  }

  getPokemonDetails() {
    this.store.select(selectPokemonByName(this.pokemonName as string)).pipe(
      tap((data) => {
        if (!data) {
          this.store.dispatch(getPokemonByName({ name: this.pokemonName }));
        }
      }),
      switchMap((data) => of(data))
    ).subscribe({
      next: val => this.pokemonDetails = val
    })
	}

  deleteAbilityItem(abilityName: string){
    this.pokemonDetails!.abilities = this.pokemonDetails!.abilities!.filter(e => e.ability.name !== abilityName);
    console.log(this.pokemonDetails?.abilities)
  }

  deleteMoveItem(moveName: string){
    const updatedMoves = this.pokemonDetails?.moves.filter(e => e.move.name !== moveName);
    return {
      ...this.pokemonDetails,
      moves: updatedMoves
    }
  }

  saveUpdatedData(){
    console.log(this.pokemonDetails)
    const updatedData = {
      name: this.pokemonDetails?.name,
      abilities: this.pokemonDetails?.abilities,
      moves: this.pokemonDetails?.moves,
      height: this.pokemonDetails?.height,
      weight: this.pokemonDetails?.weight,
      id: this.pokemonDetails?.id,
      sprites: this.pokemonDetails?.sprites
    }

    this.store.dispatch(changePokemonDetails({itemId: this.pokemonDetails?.id, changes: updatedData}))
  }
}
