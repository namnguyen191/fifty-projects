import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

type User = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
  };
  picture: {
    thumbnail: string;
  };
  display?: 'show' | 'hide';
};

@Component({
  selector: 'app-day-fourty-two',
  templateUrl: './day-fourty-two.component.html',
  styleUrls: ['./day-fourty-two.component.scss'],
})
export class DayFourtyTwoComponent implements OnInit {
  readonly RANDOM_USER_API_URL = 'https://randomuser.me/api';

  users: User[] = [];

  constructor(private titleService: Title, private http: HttpClient) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 42');
    this.http
      .get<{ results: User[] }>(this.RANDOM_USER_API_URL + '?results=50')
      .subscribe((res) => {
        this.users = res.results;
        this.users.forEach((usr) => (usr.display = 'show'));
      });
  }

  filterData(event: Event) {
    const inputEle = event.target as HTMLInputElement;

    const searchTerm = inputEle.value;
    this.users.forEach((usr) => {
      if (
        usr.name.first.includes(searchTerm) ||
        usr.name.last.includes(searchTerm) ||
        usr.location.city.includes(searchTerm) ||
        usr.location.state.includes(searchTerm)
      ) {
        usr.display = 'show';
      } else {
        usr.display = 'hide';
      }
    });
  }
}
