import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../entities/moviesIData';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../../entities/moviesData';
import { NumberFormatPipe } from '../../pipes/number-format.pipe';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [NumberFormatPipe, HeaderComponent],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
})
export class MovieDetailsPageComponent implements OnInit {
  movieData: any;
  movies = [...movies];

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId)
      this.movieData = this.movies.find(
        (currentMovie) => currentMovie.id === parseInt(movieId)
      );
  }
}
