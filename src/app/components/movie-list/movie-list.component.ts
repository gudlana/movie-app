import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() addedToFavorites = new EventEmitter<number>();
  @Output() addedToWatchlist = new EventEmitter<number>();

  addToFavorites(id: number) {
    this.addedToFavorites.emit(id);
  }
  addToWatchlist(id: number) {
    this.addedToWatchlist.emit(id);
  }
}
