import { Component, OnInit } from '@angular/core';
import { MaterialMovieCardComponent } from '../../components/material-movie-card/material-movie-card.component';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../entities/moviesIData';
import { getMoviesById } from '../../utils/getMoviesById';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-favorite-movies-page',
  standalone: true,
  imports: [MovieListComponent, LayoutComponent],
  templateUrl: './favorite-movies-page.component.html',
  styleUrl: './favorite-movies-page.component.scss',
})
export class FavoriteMoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const ids = params['data'].split(',').map(Number) as number[];
      if (ids) {
        this.movies = getMoviesById(ids);
      }
    });
  }
}
