import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { IncreAniDirective } from './incre-ani.directive';
import { ToastDirective } from './toast.directive';
import { HoldableDirective } from './holdable.directive';

@NgModule({
  declarations: [
    ProjectCardComponent,
    IncreAniDirective,
    ToastDirective,
    HoldableDirective,
  ],
  imports: [CommonModule],
  exports: [
    ProjectCardComponent,
    CommonModule,
    IncreAniDirective,
    ToastDirective,
    HoldableDirective,
  ],
})
export class SharedModule {}
