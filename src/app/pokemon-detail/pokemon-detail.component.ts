
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(private route: ActivatedRoute, private dataService: DataService,private location: Location) { }

  ngOnInit(): void {
    this.getPokemonDetails();
  }

  getPokemonDetails(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.dataService.getPokemon(id)
        .subscribe((pokemon: any) => {
          this.pokemon = pokemon;
        });
    } else {
      
      console.error('No ID parameter found in the route');
    }
  }

  getPokemonImage(id: number): string {
    return this.dataService.getPokemonImage(id);
  }

  updatePokemon(): void {
    this.dataService.updatePokemon(this.pokemon)
      .subscribe(() => {
        console.log('Pokemon updated successfully');
        
      });
  }

  goBack(): void {
    this.location.back(); 
  }
}
