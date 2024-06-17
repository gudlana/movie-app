import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { movies } from '../../entities/moviesData';
import { Movie } from '../../entities/moviesIData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies: Movie[] = movies;
  public favoritesList: Movie[] = [];
  public watchList: Movie[] = [];

  private addToList(list: Movie[], id: number) {
    const movieToList = list.find((movie) => movie.id === id);
    if (movieToList) return list;
    const addedMovie = this.movies.find((movie) => movie.id === id);
    if (addedMovie) {
      return [...list, addedMovie];
    }
    return list;
  }

  public addToFavoritesList(id: number): void {
    this.favoritesList = this.addToList(this.favoritesList, id);
  }
  public addToWatchList(id: number): void {
    this.watchList = this.addToList(this.watchList, id);
  }
}
