import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrls } from '../constants/collection.constants';
import { pokemonCollection, pokemonDescription } from '../models/collection.models';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(protected http: HttpClient) { }

  public getPokemons(): Observable<pokemonCollection> {
		return this.http.get<pokemonCollection>(apiUrls.getPokemons(10));
	}

  public getPokemonByName(name:string | null): Observable<pokemonDescription> {
		return this.http.get<pokemonDescription>(apiUrls.getSinglePokemonByName(name));
	}
}
