import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card[title][imgUrl]',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() imgUrl: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
