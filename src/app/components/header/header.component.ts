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
  @Input() favoritesIds: number[] = [];
  @Input() watchLaterIds: number[] = [];

  constructor(private router: Router) {}

  navigateWithData(data: number[], isFavorite?: string) {
    const dataString = (data as number[]).map(String).join(',');
    const path = isFavorite ? 'favorite' : 'watch-list';

    this.router.navigate([{ outlets: { header: [path] } }], {
      queryParams: { data: dataString },
    });
  }
}
