import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'day-one',
    loadChildren: () =>
      import('./features/day-one/day-one.module').then((m) => m.DayOneModule),
  },
  {
    path: 'day-two',
    loadChildren: () =>
      import('./features/day-two/day-two.module').then((m) => m.DayTwoModule),
  },
  {
    path: 'day-three',
    loadChildren: () =>
      import('./features/day-three/day-three.module').then(
        (m) => m.DayThreeModule
      ),
  },
  {
    path: 'day-four',
    loadChildren: () =>
      import('./features/day-four/day-four.module').then(
        (m) => m.DayFourModule
      ),
  },
  {
    path: 'day-five',
    loadChildren: () =>
      import('./features/day-five/day-five.module').then(
        (m) => m.DayFiveModule
      ),
  },
  {
    path: 'day-six',
    loadChildren: () =>
      import('./features/day-six/day-six.module').then((m) => m.DaySixModule),
  },
  {
    path: 'day-seven',
    loadChildren: () =>
      import('./features/day-seven/day-seven.module').then(
        (m) => m.DaySevenModule
      ),
  },
  {
    path: 'day-eight',
    loadChildren: () =>
      import('./features/day-eight/day-eight.module').then(
        (m) => m.DayEightModule
      ),
  },
  {
    path: 'day-nine',
    loadChildren: () =>
      import('./features/day-nine/day-nine.module').then(
        (m) => m.DayNineModule
      ),
  },
  {
    path: 'day-ten',
    loadChildren: () =>
      import('./features/day-ten/day-ten.module').then((m) => m.DayTenModule),
  },
  {
    path: 'day-eleven',
    loadChildren: () =>
      import('./features/day-eleven/day-eleven.module').then(
        (m) => m.DayElevenModule
      ),
  },
  {
    path: 'day-twelve',
    loadChildren: () =>
      import('./features/day-twelve/day-twelve.module').then(
        (m) => m.DayTwelveModule
      ),
  },
  {
    path: 'day-thirteen',
    loadChildren: () =>
      import('./features/day-thirteen/day-thirteen.module').then(
        (m) => m.DayThirteenModule
      ),
  },
  {
    path: 'day-fourteen',
    loadChildren: () =>
      import('./features/day-fourteen/day-fourteen.module').then(
        (m) => m.DayFourteenModule
      ),
  },
  {
    path: 'day-fifteen',
    loadChildren: () =>
      import('./features/day-fifteen/day-fifteen.module').then(
        (m) => m.DayFifteenModule
      ),
  },
  { path: 'day-sixteen', loadChildren: () => import('./features/day-sixteen/day-sixteen.module').then(m => m.DaySixteenModule) },
  { path: 'day-seventeen', loadChildren: () => import('./features/day-seventeen/day-seventeen.module').then(m => m.DaySeventeenModule) },
  { path: 'day-eighteen', loadChildren: () => import('./features/day-eighteen/day-eighteen.module').then(m => m.DayEighteenModule) },
  { path: 'day-nineteen', loadChildren: () => import('./features/day-nineteen/day-nineteen.module').then(m => m.DayNineteenModule) },
  { path: 'day-twenty', loadChildren: () => import('./features/day-twenty/day-twenty.module').then(m => m.DayTwentyModule) },
  { path: 'day-twenty-one', loadChildren: () => import('./features/day-twenty-one/day-twenty-one.module').then(m => m.DayTwentyOneModule) },
  { path: 'day-twenty-two', loadChildren: () => import('./features/day-twenty-two/day-twenty-two.module').then(m => m.DayTwentyTwoModule) },
  { path: 'day-twenty-three', loadChildren: () => import('./features/day-twenty-three/day-twenty-three.module').then(m => m.DayTwentyThreeModule) },
  { path: 'day-twenty-four', loadChildren: () => import('./features/day-twenty-four/day-twenty-four.module').then(m => m.DayTwentyFourModule) },
  { path: 'day-twenty-five', loadChildren: () => import('./features/day-twenty-five/day-twenty-five.module').then(m => m.DayTwentyFiveModule) },
  { path: 'day-twenty-six', loadChildren: () => import('./features/day-twenty-six/day-twenty-six.module').then(m => m.DayTwentySixModule) },
  { path: 'day-twenty-seven', loadChildren: () => import('./features/day-twenty-seven/day-twenty-seven.module').then(m => m.DayTwentySevenModule) },
  { path: 'day-twenty-eight', loadChildren: () => import('./features/day-twenty-eight/day-twenty-eight.module').then(m => m.DayTwentyEightModule) },
  { path: 'day-twenty-nine', loadChildren: () => import('./features/day-twenty-nine/day-twenty-nine.module').then(m => m.DayTwentyNineModule) },
  { path: 'day-thirty', loadChildren: () => import('./features/day-thirty/day-thirty.module').then(m => m.DayThirtyModule) },
  { path: 'day-thirty-one', loadChildren: () => import('./features/day-thirty-one/day-thirty-one.module').then(m => m.DayThirtyOneModule) },
  { path: 'day-thirty-two', loadChildren: () => import('./features/day-thirty-two/day-thirty-two.module').then(m => m.DayThirtyTwoModule) },
  { path: 'day-thirty-three', loadChildren: () => import('./features/day-thirty-three/day-thirty-three.module').then(m => m.DayThirtyThreeModule) },
  { path: 'day-thirty-four', loadChildren: () => import('./features/day-thirty-four/day-thirty-four.module').then(m => m.DayThirtyFourModule) },
  { path: 'day-thirty-five', loadChildren: () => import('./features/day-thirty-five/day-thirty-five.module').then(m => m.DayThirtyFiveModule) },
  { path: 'day-thirty-six', loadChildren: () => import('./features/day-thirty-six/day-thirty-six.module').then(m => m.DayThirtySixModule) },
  { path: 'day-thirty-seven', loadChildren: () => import('./features/day-thirty-seven/day-thirty-seven.module').then(m => m.DayThirtySevenModule) },
  { path: 'day-thirty-eight', loadChildren: () => import('./features/day-thirty-eight/day-thirty-eight.module').then(m => m.DayThirtyEightModule) },
  { path: 'day-thirty-nine', loadChildren: () => import('./features/day-thirty-nine/day-thirty-nine.module').then(m => m.DayThirtyNineModule) },
  { path: 'day-fourty', loadChildren: () => import('./features/day-fourty/day-fourty.module').then(m => m.DayFourtyModule) },
  { path: 'day-fourty-one', loadChildren: () => import('./features/day-fourty-one/day-fourty-one.module').then(m => m.DayFourtyOneModule) },
  { path: 'day-fourty-two', loadChildren: () => import('./features/day-fourty-two/day-fourty-two.module').then(m => m.DayFourtyTwoModule) },
  { path: 'day-fourty-three', loadChildren: () => import('./features/day-fourty-three/day-fourty-three.module').then(m => m.DayFourtyThreeModule) },
  { path: 'day-fourty-four', loadChildren: () => import('./features/day-fourty-four/day-fourty-four.module').then(m => m.DayFourtyFourModule) },
  { path: 'day-fourty-five', loadChildren: () => import('./features/day-fourty-five/day-fourty-five.module').then(m => m.DayFourtyFiveModule) },
  { path: 'day-fourty-six', loadChildren: () => import('./features/day-fourty-six/day-fourty-six.module').then(m => m.DayFourtySixModule) },
  { path: 'day-fourty-seven', loadChildren: () => import('./features/day-fourty-seven/day-fourty-seven.module').then(m => m.DayFourtySevenModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
