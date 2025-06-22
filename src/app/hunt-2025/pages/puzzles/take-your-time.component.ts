import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-take-your-time',
  template: ` <app-puzzle
    puzzleId="2025-e2"
    titleName="Take Your Time"
    flavour=""
    answerHash=""
    [cannedHints]="[]"
  >
    <img src="./2025/take-your-time/1.jpg" />
    <img src="./2025/take-your-time/2.jpg" />
    <img src="./2025/take-your-time/3.jpg" />
    <img src="./2025/take-your-time/4.jpg" />
    <img src="./2025/take-your-time/5.jpg" />
    <img src="./2025/take-your-time/6.jpg" />
    <img src="./2025/take-your-time/7.jpg" />
    <img src="./2025/take-your-time/8.jpg" />
    <img src="./2025/take-your-time/9.jpg" />
    <img src="./2025/take-your-time/10.jpg" />
    <img src="./2025/take-your-time/11.jpg" />
  </app-puzzle>`,
  imports: [PuzzleComponent],
})
export class TakeYourTimeComponent {}
