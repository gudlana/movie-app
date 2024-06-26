import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Movie } from '../../entities/moviesIData';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-material-movie-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './material-movie-card.component.html',
  styleUrl: './material-movie-card.component.scss',
})
export class MaterialMovieCardComponent {
  @Input() movieData!: Movie;
  @Output() addToFavoritesList = new EventEmitter<number>();
  @Output() addToWatchList = new EventEmitter<number>();

  public onAddToFavoritesList(id: number): void {
    this.addToFavoritesList.emit(id);
  }
  public onAddToWatchList(id: number): void {
    this.addToWatchList.emit(id);
  }
}
