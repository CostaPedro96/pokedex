import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        console.log(response);
        this.pokemons = response;
        this.filteredPokemons = response;
      });
  }


  getPokemonImage(id: number): string {
    return this.dataService.getPokemonImage(id);
  }


  goToDetail(id: number): void {
    this.router.navigate(['/pokemons', id]);
  }

  onSearchTermChange(searchTerm: string): void {
    this.filteredPokemons = this.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
