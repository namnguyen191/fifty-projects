import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayOneComponent } from './day-one/day-one.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'day-one',
    loadChildren: () =>
      import('./day-one/day-one.module').then((m) => m.DayOneModule),
  },
  {
    path: 'day-two',
    loadChildren: () =>
      import('./day-two/day-two.module').then((m) => m.DayTwoModule),
  },
  { path: 'day-three', loadChildren: () => import('./day-three/day-three.module').then(m => m.DayThreeModule) },
  { path: 'day-four', loadChildren: () => import('./day-four/day-four.module').then(m => m.DayFourModule) },
  { path: 'day-five', loadChildren: () => import('./day-five/day-five.module').then(m => m.DayFiveModule) },
  { path: 'day-six', loadChildren: () => import('./day-six/day-six.module').then(m => m.DaySixModule) },
  { path: 'day-seven', loadChildren: () => import('./day-seven/day-seven.module').then(m => m.DaySevenModule) },
  { path: 'day-eight', loadChildren: () => import('./day-eight/day-eight.module').then(m => m.DayEightModule) },
  { path: 'day-nine', loadChildren: () => import('./day-nine/day-nine.module').then(m => m.DayNineModule) },
  { path: 'day-ten', loadChildren: () => import('./day-ten/day-ten.module').then(m => m.DayTenModule) },
  { path: 'day-eleven', loadChildren: () => import('./day-eleven/day-eleven.module').then(m => m.DayElevenModule) },
  { path: 'day-twelve', loadChildren: () => import('./day-twelve/day-twelve.module').then(m => m.DayTwelveModule) },
  { path: 'day-thirteen', loadChildren: () => import('./day-thirteen/day-thirteen.module').then(m => m.DayThirteenModule) },
  { path: 'day-fourteen', loadChildren: () => import('./day-fourteen/day-fourteen.module').then(m => m.DayFourteenModule) },
  { path: 'day-fifteen', loadChildren: () => import('./day-fifteen/day-fifteen.module').then(m => m.DayFifteenModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
