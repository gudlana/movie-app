import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../entities/moviesIData';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { genreIds } from '../../entities/genres';
import { MovieService } from '../../servises/movie.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatCardModule,
  ],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
})
export class MovieDetailsPageComponent implements OnInit {
  movie: Movie | undefined;
  baseImageUrl = 'https://image.tmdb.org/t/p/original';
  imageUrl!: string;
  genres: string[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const movieId = Number(params.get('id'));
      this.movie = this.movieService.getMoviesById(movieId);
    });
    this.imageUrl = `${this.baseImageUrl}/${this.movie?.poster_path}`;
    this.genres = this.transformGenreIds(genreIds);
  }

  transformGenreIds(genres: Record<number, string>): string[] | undefined {
    if (this.movie) {
      return this.movie.genre_ids.map((id) => genres[id].toLowerCase());
    }
    return undefined;
  }

  onAddToFavorites(id: number) {
    this.movieService.addToFaforites(id);
  }
  onAddToWatchList(id: number) {
    this.movieService.addToWatchlist(id);
  }
}
