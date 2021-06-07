import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-day-seventeen',
  templateUrl: './day-seventeen.component.html',
  styleUrls: ['./day-seventeen.component.scss'],
})
export class DaySeventeenComponent implements OnInit {
  movies: any[] = [];
  readonly MOVIE_DB_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  constructor(private titleService: Title, private http: HttpClient) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 17');
    this.http
      .get<any>(
        `${environment.theMovieDbUrl}/movie/popular?api_key=${environment.theMovieDbAPIKey}`
      )
      .subscribe((res) => {
        const { results } = res;
        this.movies = results;
      });
  }

  searchMovies(searchTerm: string) {
    this.http
      .get<any>(
        `${environment.theMovieDbUrl}/search/movie?api_key=${environment.theMovieDbAPIKey}&query=${searchTerm}`
      )
      .subscribe((res) => {
        const { results } = res;
        this.movies = results;
      });
  }
}
