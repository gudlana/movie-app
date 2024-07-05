import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../entities/moviesIData';
import { ActivatedRoute } from '@angular/router';
import { getMoviesById } from '../../utils/getMoviesById';
import { genreIds } from '../../entities/genres';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
})
export class MovieDetailsPageComponent implements OnInit {
  movie: Movie | undefined;
  baseImageUrl = 'https://image.tmdb.org/t/p/original';
  imageUrl!: string;
  genres: string[] | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const movieId = Number(params.get('id'));
      [this.movie] = getMoviesById([movieId]);
    });
    this.imageUrl = `${this.baseImageUrl}/${this.movie?.poster_path}`;
    this.genres = this.transformGenreIds(genreIds);
    // this.rating = this.generateRatingArray();
  }

  transformGenreIds(genres: Record<number, string>): string[] | undefined {
    if (this.movie) {
      return this.movie.genre_ids.map((id) => genres[id].toLowerCase());
    }
    return undefined;
  }
}


