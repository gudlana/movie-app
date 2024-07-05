import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Movie } from '../../entities/moviesIData';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MovieListComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @Input() movies!: Movie[];
  @Input() favoritesIds: number[] = [];
  @Input() watchLaterIds: number[] = [];
  @Output() addedToFavorites = new EventEmitter<number>();
  @Output() addedToWatchlist = new EventEmitter<number>();

  addToFavorites(id: number) {
    this.addedToFavorites.emit(id);
  }

  addToWatchlist(id: number) {
    this.addedToWatchlist.emit(id);
  }
}
