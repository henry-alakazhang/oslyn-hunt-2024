import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-of-a-feather',
  template: `
    <app-puzzle
      puzzleId="2025-e1"
      titleName="Of a Feather"
      flavour="Sholmes' case notes, Room 430: What sort of bird has this kind of Wingspan?"
      [cannedHints]="cannedHints"
    >
      <a href="./2025/of-a-feather.jpg" target="_blank">
        <img src="./2025/of-a-feather.jpg" />
      </a>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class OfAFeatherComponent {
  cannedHints = [
    'If I recall correctly, in Wingsan, each row represents a habitat. That still seems to match this board.',
    'The cards on the board seem to be in the right place, so just play your hand out, then draw more cards.',
  ];
}
