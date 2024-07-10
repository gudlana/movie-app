import { Component, OnInit } from '@angular/core';
import { Movie } from '../../entities/moviesIData';
import { MovieService } from '../../servises/movie.service';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-watch-later-movies-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './watch-later-movies-page.component.html',
  styleUrl: './watch-later-movies-page.component.scss',
})
export class WatchLaterMoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getWatchLaterMovies();
  }
}
