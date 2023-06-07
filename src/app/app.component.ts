import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [WelcomeComponent, RouterOutlet, RouterLink],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
