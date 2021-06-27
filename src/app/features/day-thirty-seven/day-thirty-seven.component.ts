import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Pokemon {
  name: string;
  type: string;
  index: number;
}

@Component({
  selector: 'app-day-thirty-seven',
  templateUrl: './day-thirty-seven.component.html',
  styleUrls: ['./day-thirty-seven.component.scss'],
})
export class DayThirtySevenComponent implements OnInit {
  readonly COLORS: { [key: string]: string } = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
  };
  readonly POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

  pokemons: Pokemon[] = [];

  constructor(private titleService: Title, private http: HttpClient) {
    this.fetchPokemons(50);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 37');
  }

  getColorBaseOnPokeType(type: string) {
    if (type in this.COLORS) {
      return this.COLORS[type];
    } else {
      return '#fff';
    }
  }

  fetchPokemons(amount: number) {
    if (amount > 200) {
      throw new Error('Too many, please reduce amount to be bellow 200');
    }

    let seen: number[] = [];
    for (let i = 0; i < amount; i++) {
      let randomIndex = Math.floor(Math.random() * 399 + 1);
      while (seen.findIndex((num) => num === randomIndex) !== -1) {
        randomIndex = Math.floor(Math.random() * 399 + 1);
      }

      seen.push(randomIndex);

      this.http
        .get(`${this.POKE_API_URL}/${randomIndex}`)
        .subscribe((poke: any) => {
          this.pokemons.push({
            name: poke.name,
            type: poke.types[0].type.name,
            index: randomIndex,
          });
        });
    }
  }
}
