import { Injectable } from '@angular/core';
import { Movie } from '../entities/moviesIData';
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from '../entities/moviesData';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  favoriteMovies: Movie[] = [];
  watchLaterMovies: Movie[] = [];
  movies: Movie[] = [
    ...new Set([
      ...popularMovies,
      ...nowPlayingMovies,
      ...topRatedMovies,
      ...upcomingMovies,
    ]),
  ];

  constructor() {}

  getMoviesById(id: number) {
    return this.movies.find((movie) => movie.id === id);
  }
  addToWatchlist(id: number) {
    this.updateList(this.watchLaterMovies, id);
  }

  addToFaforites(id: number) {
    this.updateList(this.favoriteMovies, id);
  }

  updateList(movieList: Movie[], id: number) {
    const movieIndex = movieList.findIndex((movie) => movie.id === id);

    if (movieIndex !== -1) {
      movieList.splice(movieIndex, 1);
    } else {
      const addedMovie = [
        ...new Set([
          ...nowPlayingMovies,
          ...popularMovies,
          ...topRatedMovies,
          ...upcomingMovies,
        ]),
      ].find((movie) => movie.id === id);

      if (addedMovie) {
        movieList.push(addedMovie);
      }
    }
  }

  getPopularMovies() {
    return popularMovies;
  }

  getNowPlayingMovies() {
    return nowPlayingMovies;
  }

  getTopRatedMovies() {
    return topRatedMovies;
  }

  getUpcomingMovies() {
    return upcomingMovies;
  }

  getFavoritesMovies() {
    return this.favoriteMovies;
  }

  getWatchLaterMovies() {
    return this.watchLaterMovies;
  }
}
