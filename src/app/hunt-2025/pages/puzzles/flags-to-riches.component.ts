import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-flags-to-riches',
  template: `
    <app-puzzle
      puzzleId="2025-h2"
      titleName="Flags to Riches"
      flavour="Sholmes' case notes, Room 310: I suspect this room will help us find the exit path of any stolen money, but the thought of vexillology has me board to tears. I'll let Wilson handle it."
      [cannedHints]="cannedHints"
    >
      <a href="./2025/flags-to-riches.png" target="_blank">
        <img src="./2025/flags-to-riches.png" />
      </a>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class FlagsToRichesComponent {
  cannedHints = [
    "Alright, fine, it's not really vexillology. These are in fact logic puzzles, but they are pedestrian to the point of being a game.",
    'More important than the flag is the currency the funds passed through.',
    'Things should be in order once you index it all.',
  ];
}
