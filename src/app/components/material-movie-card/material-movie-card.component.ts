import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Movie } from '../../entities/moviesIData';
import { Router, RouterLink } from '@angular/router';
import { genreIds } from '../../entities/genres';

@Component({
  selector: 'app-material-movie-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './material-movie-card.component.html',
  styleUrl: './material-movie-card.component.scss',
})
export class MaterialMovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() addedToFavorites: EventEmitter<number> = new EventEmitter<number>();
  @Output() addedToWatchlist: EventEmitter<number> = new EventEmitter<number>();
  imageUrl!: string;
  genres!: string[];
  movieId!: string;
  baseImageUrl = 'https://image.tmdb.org/t/p/original';

  constructor(private router: Router) {}

  ngOnInit() {
    this.imageUrl = `${this.baseImageUrl}/${this.movie.backdrop_path}`;
    this.genres = this.transformGenreIds(genreIds);
    this.movieId = this.replaceId(this.movie.id);
  }
  @Output() addedToFavoritesList = new EventEmitter<number>();
  @Output() addedToWatchList = new EventEmitter<number>();

  addToFavorites(id: number, e: Event) {
    e.stopPropagation();
    this.addedToFavorites.emit(id);
  }

  addToWatchlist(id: number, e: Event) {
    e.stopPropagation();
    this.addedToWatchlist.emit(id);
  }

  transformGenreIds(genres: Record<number, string>): string[] {
    return this.movie.genre_ids.map((id) => genres[id].toLowerCase());
  }

  replaceId(id: number) {
    return `/${'movie/:id'.replace(':id', String(id))}`;
  }

  navigateToMovieDetails(id: number) {
    const movieId = this.replaceId(id);
    this.router.navigate([movieId]);
  }
}
