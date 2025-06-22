import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-of-a-feather',
  template: `
    <app-puzzle
      puzzleId="2025-e1"
      titleName="Of a Feather"
      flavour=""
      answerHash=""
      [cannedHints]="[]"
    >
      <a href="./2025/of-a-feather.jpg" target="_blank">
        <img src="./2025/of-a-feather.jpg" />
      </a>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class OfAFeatherComponent {}
