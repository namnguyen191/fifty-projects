import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

type Insect = {
  img: string;
  name: string;
};

@Component({
  selector: 'app-day-fifty',
  templateUrl: './day-fifty.component.html',
  styleUrls: ['./day-fifty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayFiftyComponent implements OnInit {
  @ViewChild('time') timeRef!: ElementRef<HTMLHeadingElement>;
  @ViewChild('score') scoreRef!: ElementRef<HTMLDivElement>;

  screen: 'welcome' | 'menu' | 'game' = 'welcome';

  insects: Insect[] = [
    {
      name: 'Fly',
      img: 'http://pngimg.com/uploads/fly/fly_PNG3946.png',
    },
    {
      name: 'Mosquito',
      img: 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png',
    },
    {
      name: 'Spider',
      img: 'http://pngimg.com/uploads/spider/spider_PNG12.png',
    },
    {
      name: 'Roach',
      img: 'http://pngimg.com/uploads/roach/roach_PNG12163.png',
    },
  ];

  chosenInsect: string | undefined;
  score = 0;

  insectsToDisplay: {
    x: string;
    y: string;
    rot: string;
    squashed?: boolean;
  }[] = [];

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - 50');
  }

  startGame(insectImg: string) {
    this.screen = 'game';
    this.chosenInsect = insectImg;

    let timeSec = 0;
    let timeMin = 0;

    const { x, y, rot } = this.getRandomPos();
    this.insectsToDisplay = [{ x, y, rot }];

    setInterval(() => {
      timeSec++;
      if (timeSec === 60) {
        timeSec = 0;
        timeMin++;
      }

      this.renderer.setProperty(
        this.timeRef.nativeElement,
        'innerText',
        `Time: ${timeMin.toString().padStart(2, '0')}:${timeSec
          .toString()
          .padStart(2, '0')}`
      );
    }, 1000);
  }

  getRandomPos() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const x = Math.random() * (width - 200) + 100 + 'px';
    const y = Math.random() * (height - 200) + 100 + 'px';
    const rot = Math.floor(Math.random() * 361) + 'deg';

    return { x, y, rot };
  }

  squash(i: number) {
    this.insectsToDisplay[i].squashed = true;
    this.score++;

    setTimeout(() => {
      for (let j = 0; j < 1; j++) {
        const { x, y, rot } = this.getRandomPos();
        this.insectsToDisplay.push({ x, y, rot });
      }
      this.changeDetectorRef.detectChanges();
    }, 500);

    setTimeout(() => {
      for (let j = 0; j < 2; j++) {
        const { x, y, rot } = this.getRandomPos();
        this.insectsToDisplay.push({ x, y, rot });
      }
      this.changeDetectorRef.detectChanges();
    }, 1000);

    setTimeout(() => {
      for (let j = 0; j < 3; j++) {
        const { x, y, rot } = this.getRandomPos();
        this.insectsToDisplay.push({ x, y, rot });
      }
      this.changeDetectorRef.detectChanges();
    }, 1500);
  }
}
