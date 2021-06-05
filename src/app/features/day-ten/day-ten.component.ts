import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-day-ten',
  templateUrl: './day-ten.component.html',
  styleUrls: ['./day-ten.component.scss'],
})
export class DayTenComponent implements OnInit {
  apiUrl: string = 'https://icanhazdadjoke.com/';
  randomJoke: string = '';

  constructor(
    private readonly titleService: Title,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 10');
    this.getNewJoke();
  }

  getNewJoke() {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    this.http
      .get<{ id: string; joke: string; status: HttpStatusCode }>(this.apiUrl, {
        headers,
      })
      .subscribe(
        (res) => {
          this.randomJoke = res.joke;
        },
        (err) => {
          this.randomJoke =
            'Something went wrong! Please check your internet connection or try again latter';
          console.log(err);
        }
      );
  }
}
