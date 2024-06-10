import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movie = {
    imgPath: 'assets/images/movie-01.jpg',
    id: 123654,
    overview:
      "Події беруть свій початок у шістдесят п'ятому році минулого сторіччя. У центрі оповідання опиняється Ендевор Морс. Головний персонаж вирушає до Оксфорда, щоб зайнятися пошуками зниклої учениці. Саме тут Ендевор нарешті знайде себе, набуде самопізнання і зуміє дійти певного висновку щодо того, як розвиватися надалі. Головний герой стає учасником великомасштабного розслідування, затіяного Фредом Т'юздеєм. Щоправда, через недовіру з боку колег чоловік виявляється дискредитованим, через що змушений відступити від обраного вектора. У результаті Ендевор, розуміючи, що такий поворот подій йому зовсім не подобається, вирішує діяти власними силами та ідеями. Він готовий ризикнути всім заради істини.",
    release_date: '2023',
    title: 'Молодий Морс / Ендевор',
    rating: 8.6,
  };
  handleAddFavorite(title: string) {
    let favoriteEl = document.createElement('div');
    let favoriteContainer = document.querySelector('.favorites__list');
    if (favoriteContainer) {
      favoriteEl.innerText = title;
      favoriteContainer.insertAdjacentElement('beforeend', favoriteEl);
    }
  }
  handleAddWatchList(title: string) {
    let watchlistEl = document.createElement('div');
    let watchlistContainer = document.querySelector('.watchlist__list');
    if (watchlistContainer) {
      watchlistEl.innerText = title;
      watchlistContainer.insertAdjacentElement('beforeend', watchlistEl);
    }
  }
}
