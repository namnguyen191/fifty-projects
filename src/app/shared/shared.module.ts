import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProjectCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ProjectCardComponent],
})
export class SharedModule {}
