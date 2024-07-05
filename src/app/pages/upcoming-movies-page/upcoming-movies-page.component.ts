import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Movie } from '../../entities/moviesIData';
import { topRatedMovies } from '../../entities/moviesData';

@Component({
  selector: 'app-upcoming-movies-page',
  standalone: true,
  imports: [LayoutComponent, MovieListComponent],
  templateUrl: './upcoming-movies-page.component.html',
  styleUrl: './upcoming-movies-page.component.scss',
})
export class UpcomingMoviesPageComponent {
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
