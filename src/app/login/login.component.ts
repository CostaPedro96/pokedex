import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { } 

  //login(): void {
  //  console.log('Username:', this.username);
  //  console.log('Password:', this.password);
  //}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigateByUrl('/pokemons');
    } else {
      
    }
  }
}
