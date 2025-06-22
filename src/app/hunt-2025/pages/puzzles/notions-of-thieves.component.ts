import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-notions-of-thieves',
  template: `
    <app-puzzle
      puzzleId="2025-m"
      titleName="Notions of Thieves"
      flavour=""
      [cannedHints]="[]"
    >
      <img src="./2025/notions-of-thieves.jpg" />
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class NotionsOfThievesComponent {}
