import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Movie } from '../../entities/moviesIData';
import { topRatedMovies } from '../../entities/moviesData';
import { MovieService } from '../../servises/movie.service';

@Component({
  selector: 'app-upcoming-movies-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './upcoming-movies-page.component.html',
  styleUrl: './upcoming-movies-page.component.scss',
})
export class UpcomingMoviesPageComponent implements OnInit {
  movies: Movie[] = topRatedMovies;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getUpcomingMovies();
  }
}
