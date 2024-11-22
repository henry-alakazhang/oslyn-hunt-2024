import { Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction.component';
import { PuzzleOneComponent } from './pages/puzzles/1-sekai.component';
import { PuzzleTwoComponent } from './pages/puzzles/2-power-scaling.component';
import { PuzzleThreeComponent } from './pages/puzzles/3-capsule-machine.component';
import { PuzzleFourComponent } from './pages/puzzles/4-entries-mains-desserts.component';
import { PuzzleFiveComponent } from './pages/puzzles/5-parallel-universes.component';
import { PuzzleSixComponent } from './pages/puzzles/6-first-name-basis.component';
import { PuzzleMetaComponent } from './pages/puzzles/m-hunters-and-gatherers.component';

export const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent,
  },
  {
    path: 'sekai',
    component: PuzzleOneComponent,
  },
  {
    path: 'power-scaling',
    component: PuzzleTwoComponent,
  },
  {
    path: 'capsule-machine',
    component: PuzzleThreeComponent,
  },
  {
    path: 'entries-mains-deserts',
    component: PuzzleFourComponent,
  },
  {
    path: 'parallel-universes',
    component: PuzzleFiveComponent,
  },
  {
    path: 'first-name-basis',
    component: PuzzleSixComponent,
  },
  {
    path: 'hunters-and-gatherers',
    component: PuzzleMetaComponent,
  },
];
