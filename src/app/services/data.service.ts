import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://softwium.com/api/pokemons';

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(this.apiUrl);
  }

  getPokemon(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


  getPokemonImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  updatePokemon(updatedPokemon: any): Observable<any> {
    const pokemonId = updatedPokemon.id;
    const updateUrl = `${this.apiUrl}/${pokemonId}`;
    return this.http.put<any>(updateUrl, updatedPokemon);
  }

  deletePokemon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
