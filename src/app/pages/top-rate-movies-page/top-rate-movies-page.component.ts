import { Component } from '@angular/core';
import { topRatedMovies } from '../../entities/moviesData';
import { Movie } from '../../entities/moviesIData';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-top-rate-movies-page',
  standalone: true,
  imports: [LayoutComponent, MovieListComponent],
  templateUrl: './top-rate-movies-page.component.html',
  styleUrl: './top-rate-movies-page.component.scss',
})
export class TopRateMoviesPageComponent {
  movies: Movie[] = topRatedMovies;
  favoritesMovies: number[] = [];
  watchLaterMovies: number[] = [];

  private addToList(list: number[], id: number) {
    const movieInList = list.find((movieId) => movieId === id);
    if (movieInList) return list;
    return [...list, id];
  }

  onAddToFavorites(id: number) {
    this.favoritesMovies = this.addToList(this.favoritesMovies, id);
  }

  onAddToWatchlist(id: number) {
    this.watchLaterMovies = this.addToList(this.watchLaterMovies, id);
  }
}
