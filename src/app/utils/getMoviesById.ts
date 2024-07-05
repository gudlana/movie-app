import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from '../entities/moviesData';
import { Movie } from '../entities/moviesIData';

export function getMoviesById(ids: number[]): Movie[] {
  const movies = [
    ...nowPlayingMovies,
    ...popularMovies,
    ...topRatedMovies,
    ...upcomingMovies,
  ];
  return movies
    .filter((movie) => ids.includes(movie.id))
    .reduce((item: Movie[], current: Movie) => {
      if (!item.some((movie) => movie.id === current.id)) {
        item.push(current);
      }
      return item;
    }, []);
}
