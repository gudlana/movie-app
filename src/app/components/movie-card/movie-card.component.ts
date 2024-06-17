import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Movie } from '../../entities/moviesIData';
import { NumberFormatPipe } from '../../pipes/number-format.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, NumberFormatPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
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
