import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { IncreAniDirective } from './incre-ani.directive';

@NgModule({
  declarations: [ProjectCardComponent, IncreAniDirective],
  imports: [CommonModule],
  exports: [ProjectCardComponent, CommonModule, IncreAniDirective],
})
export class SharedModule {}
