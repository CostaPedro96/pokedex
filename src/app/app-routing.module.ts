import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component'; 
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'pokemons', component: PokemonListComponent, canActivate: [AuthGuard] },
  { path: 'pokemons/:id', component: PokemonDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
