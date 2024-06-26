import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { PopularMoviesPageComponent } from './pages/popular-movies-page/popular-movies-page.component';
import { FavoriteMoviesPageComponent } from './pages/favorite-movies-page/favorite-movies-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    PopularMoviesPageComponent,
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    FavoriteMoviesPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'movie-app';
}
