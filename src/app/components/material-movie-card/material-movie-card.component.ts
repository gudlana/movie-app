import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Movie } from '../../entities/moviesIData';
import { Router, RouterLink } from '@angular/router';
import { genreIds } from '../../entities/genres';
import { MovieService } from '../../servises/movie.service';

@Component({
  selector: 'app-material-movie-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './material-movie-card.component.html',
  styleUrl: './material-movie-card.component.scss',
})
export class MaterialMovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  imageUrl!: string;
  genres!: string[];
  movieId!: string;
  baseImageUrl = 'https://image.tmdb.org/t/p/original';
  isFavorites: boolean = false;
  isWatchLater: boolean = false;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit() {
    this.imageUrl = `${this.baseImageUrl}/${this.movie.backdrop_path}`;
    this.genres = this.transformGenreIds(genreIds);
    this.movieId = this.replaceId(this.movie.id);
    this.isFavorites = this.movieService
      .getFavoritesMovies()
      .includes(this.movie);
    this.isWatchLater = this.movieService
      .getWatchLaterMovies()
      .includes(this.movie);
  }

  onAddToFavorites(id: number) {
    this.movieService.addToFaforites(id);
  }

  onAddToWatchlist(id: number) {
    this.movieService.addToWatchlist(id);
  }

  transformGenreIds(genres: Record<number, string>): string[] {
    return this.movie.genre_ids.map((id) => genres[id].toLowerCase());
  }

  replaceId(id: number) {
    return `/${'movie/:id'.replace(':id', String(id))}`;
  }

  navigateToMovieDetails() {
    this.router.navigate([this.movieId]);
  }
}
