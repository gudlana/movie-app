import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent implements OnInit {
  @Input() data: any;
  @Output() addFavorites = new EventEmitter<any>();
  @Output() addWatchList = new EventEmitter<any>();

  public movie: any;
  ngOnInit() {
    this.movie = this.data;
  }
  addToFavorites() {
    this.addFavorites.emit(this.movie.title);
  }
  addToWatchList() {
    this.addWatchList.emit(this.movie.title);
  }
}
