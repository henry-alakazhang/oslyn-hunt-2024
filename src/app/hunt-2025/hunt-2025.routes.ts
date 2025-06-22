import { Route } from '@angular/router';
import { IntroductionComponent } from './pages/introduction.component';

export const routes2025: Route[] = [
  {
    path: '',
    component: IntroductionComponent,
  },
  {
    path: 'answer-pronounced-answer',
    loadComponent: () =>
      import('./pages/puzzles/answer-pronounced-answer.component').then(
        (m) => m.AnswerPronouncedAnswerComponent
      ),
  },
  {
    path: 'colours-picked',
    loadComponent: () =>
      import('./pages/puzzles/colours-picked.component').then(
        (m) => m.ColoursPickedComponent
      ),
  },
  {
    path: 'each-shapen-sister',
    loadComponent: () =>
      import('./pages/puzzles/each-shapen-sister-her-domain.component').then(
        (m) => m.EachShapenSisterComponent
      ),
  },
  {
    path: 'flags-to-riches',
    loadComponent: () =>
      import('./pages/puzzles/flags-to-riches.component').then(
        (m) => m.FlagsToRichesComponent
      ),
  },
  {
    path: 'from-genesis',
    loadComponent: () =>
      import('./pages/puzzles/from-genesis.component').then(
        (m) => m.FromGenesisComponent
      ),
  },
  {
    path: 'national-righters',
    loadComponent: () =>
      import('./pages/puzzles/national-righters.component').then(
        (m) => m.NationalRightersComponent
      ),
  },
  {
    path: 'notions-of-thieves',
    loadComponent: () =>
      import('./pages/puzzles/notions-of-thieves.component').then(
        (m) => m.NotionsOfThievesComponent
      ),
  },
  {
    path: 'of-a-feather',
    loadComponent: () =>
      import('./pages/puzzles/of-a-feather.component').then(
        (m) => m.OfAFeatherComponent
      ),
  },
  {
    path: 'take-your-time',
    loadComponent: () =>
      import('./pages/puzzles/take-your-time.component').then(
        (m) => m.TakeYourTimeComponent
      ),
  },
];
