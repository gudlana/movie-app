import { Component, OnInit } from '@angular/core';
import { MaterialMovieCardComponent } from '../../components/material-movie-card/material-movie-card.component';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../../entities/moviesData';
import { Movie } from '../../entities/moviesIData';

@Component({
  selector: 'app-favorite-movies-page',
  standalone: true,
  imports: [MaterialMovieCardComponent],
  templateUrl: './favorite-movies-page.component.html',
  styleUrl: './favorite-movies-page.component.scss',
})
export class FavoriteMoviesPageComponent implements OnInit {
  favoritesId: string[] = [];
  movies = [...movies];
  favoriteMovies: Movie[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const dataString = params['data'];
      this.favoritesId = dataString ? JSON.parse(dataString) : [];
    });
    this.loadFavoriteMoviesList();
  }
  loadFavoriteMoviesList() {
    if (this.favoritesId.length) {
      for (const id of this.favoritesId) {
        const movie = this.movies.find((movie) => movie.id === parseInt(id));
        if (movie) this.favoriteMovies.push(movie);
      }
    } else this.favoriteMovies = [];
  }
}
