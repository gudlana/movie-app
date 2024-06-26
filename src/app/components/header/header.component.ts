import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() favoritesIds: string[] = [];
  @Input() watchLaterIds: string[] = [];

  constructor(private router: Router) {}

  navigateWithData(data: string[], isFavorite?: string) {
    const dataString = JSON.stringify(data);
    const path = isFavorite ? 'favorite' : 'watch-list';

    this.router.navigate([{ outlets: { header: [path] } }], {
      queryParams: { data: dataString },
    });
  }
}
