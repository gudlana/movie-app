import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public userName = 'Alex';
  public isLoggedUser = true;
  categoryMoviesList = [
    { id: 1, categoryName: 'Фільми' },
    { id: 2, categoryName: 'Серіали' },
    { id: 3, categoryName: 'Мультфільми' },
    { id: 4, categoryName: 'Документальне' },
    { id: 5, categoryName: 'Анонси' },
  ];
  trackById(index: number, item: any): number {
    return item.id;
  }
}
