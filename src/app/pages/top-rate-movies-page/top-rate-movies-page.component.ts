import { Component, OnInit } from '@angular/core';
import { Movie } from '../../entities/moviesIData';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../servises/movie.service';

@Component({
  selector: 'app-top-rate-movies-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './top-rate-movies-page.component.html',
  styleUrl: './top-rate-movies-page.component.scss',
})
export class TopRateMoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getTopRatedMovies();
  }
}
