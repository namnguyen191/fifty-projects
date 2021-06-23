import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as marked from 'marked';

interface Note {
  text: string;
  mode: 'edit' | 'view';
}

@Component({
  selector: 'app-day-thirty-three',
  templateUrl: './day-thirty-three.component.html',
  styleUrls: ['./day-thirty-three.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      state(
        '*',
        style({
          opacity: 1,
        })
      ),
      transition(':enter', animate('600ms ease-in')),
      transition(':leave', animate('600ms ease-out')),
    ]),
  ],
})
export class DayThirtyThreeComponent implements OnInit {
  @ViewChild('textArea') txtArea?: ElementRef<HTMLTextAreaElement>;

  notes: Note[] = [];
  markedFn: any;

  @ViewChild('main') mainDivRef?: ElementRef<HTMLDivElement>;

  constructor(private titleService: Title) {
    this.markedFn = marked;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 33');
    this.notes = JSON.parse(localStorage.getItem('notes') ?? '[]');
  }

  addNote(text: string) {
    this.notes.push({ text, mode: 'view' });
  }

  removeNote(index: number) {
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  toggleMode(note: Note) {
    if (note.mode === 'edit') {
      note.mode = 'view';
      localStorage.setItem('notes', JSON.stringify(this.notes));
    } else {
      note.mode = 'edit';
      setTimeout(() => {
        this.txtArea?.nativeElement.focus();
      }, 200);
    }
  }
}
