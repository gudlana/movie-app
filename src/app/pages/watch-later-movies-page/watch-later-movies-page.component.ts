import { Component, OnInit } from '@angular/core';
import { MaterialMovieCardComponent } from '../../components/material-movie-card/material-movie-card.component';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../entities/moviesIData';
import { getMoviesById } from '../../utils/getMoviesById';

@Component({
  selector: 'app-watch-later-movies-page',
  standalone: true,
  imports: [MaterialMovieCardComponent],
  templateUrl: './watch-later-movies-page.component.html',
  styleUrl: './watch-later-movies-page.component.scss',
})
export class WatchLaterMoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const ids = params['ids'].split(',').map(Number) as number[];
      if (ids) {
        this.movies = getMoviesById(ids);
      }
    });
  }
}
