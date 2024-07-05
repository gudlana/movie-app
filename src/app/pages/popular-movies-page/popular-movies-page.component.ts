import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../entities/moviesIData';
import { popularMovies } from '../../entities/moviesData';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-popular-movies-page',
  standalone: true,
  imports: [LayoutComponent, MovieListComponent],
  templateUrl: './popular-movies-page.component.html',
  styleUrl: './popular-movies-page.component.scss',
})
export class PopularMoviesPageComponent {
  movies: Movie[] = popularMovies;
  favoritesMovies: number[] = [];
  watchLaterMovies: number[] = [];
  @Output() titleEvent = new EventEmitter<string>();

  sendTitle() {
    this.titleEvent.emit('Категорія: Популярні фільми');
  }

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
