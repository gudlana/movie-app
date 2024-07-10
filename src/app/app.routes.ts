import { Routes } from '@angular/router';
import { MaterialMovieCardComponent } from './components/material-movie-card/material-movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { sidebarLinks } from './components/sidebar/sidebar-links';
import { TopRateMoviesPageComponent } from './pages/top-rate-movies-page/top-rate-movies-page.component';
import { UpcomingMoviesPageComponent } from './pages/upcoming-movies-page/upcoming-movies-page.component';
import { FavoriteMoviesPageComponent } from './pages/favorite-movies-page/favorite-movies-page.component';
import { WatchLaterMoviesPageComponent } from './pages/watch-later-movies-page/watch-later-movies-page.component';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { PopularMoviesPageComponent } from './pages/popular-movies-page/popular-movies-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: HomePagesComponent },
  { path: 'popular', component: PopularMoviesPageComponent },
  { path: 'now-playing', component: NowPlayingPageComponent },
  { path: 'top-rate', component: TopRateMoviesPageComponent },
  { path: 'upcoming', component: UpcomingMoviesPageComponent },
  { path: 'movie/:id', component: MovieDetailsPageComponent },
  { path: 'favorite', component: FavoriteMoviesPageComponent },
  { path: 'watch-list', component: WatchLaterMoviesPageComponent },
  { path: '**', component: NotFoundPageComponent },
];
