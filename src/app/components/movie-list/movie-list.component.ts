import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { movies } from '../../entities/moviesData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  public movies = movies;
  public favoritesList: string[] = [];
  public watchList: string[] = [];

  public addToFavoritesList(id: number): void {
    let movie = this.movies.find((movie) => movie.id === id);
    if (movie) {
      this.favoritesList.push(movie.title);
    }
  }
  public addToWatchList(id: number): void {
    let movie = this.movies.find((movie) => movie.id === id);
    if (movie) {
      this.watchList.push(movie.title);
    }
  }
}
