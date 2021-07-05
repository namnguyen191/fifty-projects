import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Question {
  questionText: string;
  questionChoices: string[];
  correctChoiceIndex: number;
}

@Component({
  selector: 'app-day-fourty-six',
  templateUrl: './day-fourty-six.component.html',
  styleUrls: ['./day-fourty-six.component.scss'],
})
export class DayFourtySixComponent implements OnInit {
  questions: Question[] = [
    {
      questionText: 'Which language runs in a web browser?',
      questionChoices: ['Java', 'C', 'Python', 'Javascript'],
      correctChoiceIndex: 3,
    },
    {
      questionText: 'What does CSS stand for?',
      questionChoices: [
        'Central Style Sheets',
        'Cascading Style Sheets',
        'Cascading Simple Sheets',
        'Cars SUVs Sailboats',
      ],
      correctChoiceIndex: 1,
    },
    {
      questionText: 'What does HTML stand for?',
      questionChoices: [
        'Hypertext Markup Language',
        'Hypertext Markdown Language',
        'Hyperloop Machine Language',
        'Helicopters Terminals Motorboats',
      ],
      correctChoiceIndex: 0,
    },
    {
      questionText: 'What year was Javascript launched?',
      questionChoices: ['1996', '1995', '1994', 'None of the above'],
      correctChoiceIndex: 1,
    },
  ];

  score = 0;
  curQuestionInd = 0;
  curChoiceInd = 0;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 46');
  }

  checkQuestion(answer: number) {
    if (this.questions[this.curQuestionInd].correctChoiceIndex === answer) {
      this.score++;
    }

    this.curQuestionInd++;
    this.curChoiceInd = 0;
  }

  reset() {
    this.score = 0;
    this.curQuestionInd = 0;
  }
}
