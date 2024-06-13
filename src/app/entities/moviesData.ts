import { Movie } from './moviesIData';

export const movies: Movie[] = [
  {
    id: 1,
    imgPath: 'assets/images/movie-01.jpg',
    overview:
      "Події беруть свій початок у шістдесят п'ятому році минулого сторіччя. У центрі оповідання опиняється Ендевор Морс.",
    release_year: 2023,
    title: 'Молодий Морс / Ендевор',
    rating: 8.6,
    rental_movie: 2126854,
  },
  {
    id: 2,
    imgPath: 'assets/images/movie-02.jpg',
    overview:
      'Rafa Márquez: El Capitán — це документальний фільм мексиканського режисера Карлоса Армелли, який, як випливає з назви, розповідає про життя та кар’єру Рафаеля Маркеса, одного з найвідоміших мексиканських футболістів.',
    release_year: 2024,
    title: 'Рафа Маркес: Капітан',
    rating: 6.5,
    rental_movie: 652854,
  },
  {
    id: 3,
    imgPath: 'assets/images/movie-03.jpg',
    overview:
      'Джо Гарднер - шкільний учитель музики, який найбільше в житті мріє про виступ на сцені.',
    release_year: 2020,
    title: 'Душа',
    rating: 8,
    rental_movie: 96446854,
  },
];
