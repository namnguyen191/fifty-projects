import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-project-card[title][imgUrl][description]',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() imgUrl: string | undefined;
  @Input() description: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
