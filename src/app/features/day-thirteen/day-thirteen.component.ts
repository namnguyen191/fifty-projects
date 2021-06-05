import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-thirteen',
  templateUrl: './day-thirteen.component.html',
  styleUrls: ['./day-thirteen.component.scss'],
})
export class DayThirteenComponent implements OnInit {
  tags: string[] = [];
  pickedTags: string | undefined;
  @ViewChild('txtarea') txtarea: ElementRef<HTMLTextAreaElement> | undefined;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 13');
  }

  createChoicesTags() {
    if (this.txtarea) {
      const choicesString = this.txtarea.nativeElement.value;
      this.tags = choicesString
        .split(',')
        .filter((tag) => tag.trim() !== '')
        .map((tag) => tag.trim());
    } else {
      console.log('Something wrong with getting the text area value');
    }
  }

  pickRandomTags() {
    if (this.txtarea) {
      this.txtarea.nativeElement.value =
        this.txtarea.nativeElement.value.replace(/(\r\n|\n|\r)/gm, '');
    }
    if (this.tags.length > 0) {
      const loops = Math.floor(Math.random() * (50 - 30) + 30);
      let loopCount = 0;

      const inter = setInterval(() => {
        if (loopCount === loops) {
          clearInterval(inter);
        }

        const randomTagIndex = Math.floor(Math.random() * this.tags.length);
        this.pickedTags = this.tags[randomTagIndex];

        loopCount++;
      }, 20);
    }
  }
}
