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
    rental_movie: 4548745,
  },
  {
    id: 2,
    imgPath: 'assets/images/movie-02.jpg',
    overview:
      'Rafa Márquez: El Capitán — це документальний фільм про життя та кар’єру Рафаеля Маркеса, одного з найвідоміших мексиканських футболістів.',
    release_year: 2024,
    title: 'Рафа Маркес: Капітан',
    rating: 6.5,
    rental_movie: 125896,
  },
  {
    id: 3,
    imgPath: 'assets/images/movie-03.jpg',
    overview:
      'Серіал "Дім дракона" продемонструє початок падіння дому Таргарієнів і події, що призвели до громадянської війни в родині, відомої як «Танець драконів».',
    release_year: 2022,
    title: 'Дім Дракона',
    rating: 8.4,
    rental_movie: 696325,
  },
  {
    id: 4,
    imgPath: 'assets/images/movie-04.webp',
    overview:
      'Четверта частина серії "Панда Кунг-Фу" розповідає про те, як По тренує нового Воїна Дракона і водночас стає духовним лідером Долини Миру.',
    release_year: 2024,
    title: 'Панда Кунг-Фу 4',
    rating: 6.3,
    rental_movie: 58795,
  },
];
