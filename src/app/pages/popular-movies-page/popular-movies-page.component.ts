import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../../entities/moviesIData';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../servises/movie.service';

@Component({
  selector: 'app-popular-movies-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './popular-movies-page.component.html',
  styleUrl: './popular-movies-page.component.scss',
})
export class PopularMoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getPopularMovies();
  }
}
