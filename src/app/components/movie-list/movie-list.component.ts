import { Component, Input } from '@angular/core';
import { Movie } from '../../entities/moviesIData';
import { CommonModule } from '@angular/common';
import { MaterialMovieCardComponent } from '../material-movie-card/material-movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MaterialMovieCardComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input() movies!: Movie[];
}
