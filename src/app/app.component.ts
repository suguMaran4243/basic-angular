import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,ProductlistComponent],
  templateUrl: './app.component.html',
  // template:`<h1>Hi</h1> <p>This is to test app root selector</p><app-header></app-header>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
