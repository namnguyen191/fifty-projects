import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';

export interface User {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
  name?: string;
  company?: null;
  blog?: string;
  location?: string;
  email?: null;
  hireable?: boolean;
  bio?: string;
  twitter_username?: null;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
}

export interface Repo {
  name: string;
  html_url: string;
  updated_at: string;
}

@Component({
  selector: 'app-day-twenty-eight',
  templateUrl: './day-twenty-eight.component.html',
  styleUrls: ['./day-twenty-eight.component.scss'],
})
export class DayTwentyEightComponent implements OnInit {
  readonly API_URL = 'https://api.github.com/users';

  dataSubject = new BehaviorSubject<{ user: User; repos: Repo[] }>({
    user: {
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, nostrum.',
      name: 'John Doe',
      avatar_url: 'https://randomuser.me/api/portraits/men/30.jpg',
      followers: 300,
      following: 100,
      public_repos: 34,
    },
    repos: [
      {
        html_url: '#',
        name: 'Repo 1',
        updated_at: '2019-02-12T19:42:43Z',
      },
      {
        html_url: '#',
        name: 'Repo 2',
        updated_at: '2018-02-12T19:42:43Z',
      },
      {
        html_url: '#',
        name: 'Repo 3',
        updated_at: '2017-02-12T19:42:43Z',
      },
    ],
  });

  data = this.dataSubject.asObservable();

  constructor(private titleService: Title, private http: HttpClient) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 28');
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/${username}`);
  }

  getRepos(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.API_URL}/${username}/repos`);
  }

  searchForUser(event: Event, username: string) {
    event.preventDefault();

    combineLatest(this.getUser(username), this.getRepos(username)).subscribe(
      ([usr, repos]) => {
        if (repos.length > 5) {
          // Only take top 5 most recently updated repo
          repos = repos
            .sort((a, b) => {
              const d1 = new Date(a.updated_at);
              const d2 = new Date(b.updated_at);
              return d1.getTime() > d2.getTime() ? -1 : 1;
            })
            .slice(0, 5);
        }

        const data: { user: User; repos: Repo[] } = {
          user: usr,
          repos,
        };

        this.dataSubject.next(data);
      },
      (err) => {
        console.log(
          `Error getting data for user '${username}', ${err.error.message}`
        );

        window.alert(
          `Error getting data for user '${username}', ${err.error.message}`
        );
      }
    );
  }
}
