import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { Movie } from '../../entities/moviesIData';
import { movies } from '../../entities/moviesData';
import { MaterialMovieCardComponent } from '../../components/material-movie-card/material-movie-card.component';

@Component({
  selector: 'app-popular-movies-page',
  standalone: true,
  imports: [HeaderComponent, MaterialMovieCardComponent],
  templateUrl: './popular-movies-page.component.html',
  styleUrl: './popular-movies-page.component.scss',
})
export class PopularMoviesPageComponent {
  constructor(private router: Router) {}
  popularMovies = movies;
  favoritesIds: string[] = [];
  watchLaterIds: string[] = [];

  addToFavoritesList(movieId: any) {
    if (this.favoritesIds.includes(movieId))
      this.favoritesIds = this.favoritesIds.filter((id) => id !== movieId);
    else this.favoritesIds.push(movieId);
    console.log(this.favoritesIds);
  }
  addToWatchList(movieId: any) {
    if (this.watchLaterIds.includes(movieId))
      this.watchLaterIds = this.watchLaterIds.filter((id) => id !== movieId);
    else this.watchLaterIds.push(movieId);
  }
}
