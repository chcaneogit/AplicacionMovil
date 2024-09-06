import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  irLogin() {
    this.router.navigate(['/login']) //Redirige a la página LOGIN
  }

  irHome() {
    this.router.navigate(['/home']) //Redirige a la página HOME
  }
}
