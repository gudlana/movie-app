import { Component, OnInit } from '@angular/core';
import { MaterialMovieCardComponent } from '../../components/material-movie-card/material-movie-card.component';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../entities/moviesIData';
import { getMoviesById } from '../../utils/getMoviesById';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../servises/movie.service';

@Component({
  selector: 'app-favorite-movies-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './favorite-movies-page.component.html',
  styleUrl: './favorite-movies-page.component.scss',
})
export class FavoriteMoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getFavoritesMovies();
  }
}
