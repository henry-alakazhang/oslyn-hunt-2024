import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-flags-to-riches',
  template: `
    <app-puzzle
      puzzleId="2025-h2"
      titleName="Flags to Riches"
      flavour=""
      answerHash=""
      [cannedHints]="[]"
    >
      <a href="./2025/flags-to-riches.png" target="_blank">
        <img src="./2025/flags-to-riches.png" />
      </a>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class FlagsToRichesComponent {}
