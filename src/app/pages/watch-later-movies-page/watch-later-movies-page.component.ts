import { Component, OnInit } from '@angular/core';
import { MaterialMovieCardComponent } from '../../components/material-movie-card/material-movie-card.component';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../../entities/moviesData';
import { Movie } from '../../entities/moviesIData';

@Component({
  selector: 'app-watch-later-movies-page',
  standalone: true,
  imports: [MaterialMovieCardComponent],
  templateUrl: './watch-later-movies-page.component.html',
  styleUrl: './watch-later-movies-page.component.scss',
})
export class WatchLaterMoviesPageComponent implements OnInit {
  watchLaterIds: string[] = [];
  movies = [...movies];
  watchLaterMovies: Movie[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const dataString = params['data'];
      this.watchLaterIds = dataString ? JSON.parse(dataString) : [];
    });
    this.loadFavoriteMoviesList();
  }
  loadFavoriteMoviesList() {
    if (this.watchLaterIds.length) {
      for (const id of this.watchLaterIds) {
        const movie = this.movies.find((movie) => movie.id === parseInt(id));
        if (movie) this.watchLaterMovies.push(movie);
      }
    } else this.watchLaterIds = [];
  }
}
