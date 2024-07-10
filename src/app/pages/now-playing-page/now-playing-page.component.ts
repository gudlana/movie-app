import { Component, OnInit } from '@angular/core';
import { nowPlayingMovies } from '../../entities/moviesData';
import { Movie } from '../../entities/moviesIData';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../servises/movie.service';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
})
export class NowPlayingPageComponent implements OnInit {
  movies: Movie[] = nowPlayingMovies;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getNowPlayingMovies();
  }
}
