import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-colours-picked',
  template: `
    <app-puzzle
      puzzleId="2025-m2"
      titleName="Colours Picked"
      flavour="Sholmes' case notes, Room 118: I've drunk a lot but I've never seen drinks even partly like these. This recipe might prove interesting."
      [cannedHints]="cannedHints"
    >
      <a href="./2025/colours-picked.jpg" target="_blank">
        <img src="./2025/colours-picked.jpg" />
      </a>

      <p>Bases:</p>
      <ol class="list-decimal list-inside">
        <li> _ _ _ _ _ _ _ _ _ _ _ _ [6] </li>
        <li> _ _ _ _ _ _ _ (_ _ _ _ _ _)[7] </li>
        <li> _ _ _ _ _ _ _ _ _ _ _ _ _[6] </li>
      </ol>
      <p class="mt-1"> Recipe:</p>
      <ol class="list-decimal list-inside">
        <li> Distill </li>
        <li> Add flame </li>
        <li> Mix </li>
        <li> Serve (5, 4) </li>
      </ol>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class ColoursPickedComponent {
  cannedHints = [
    "You may need to 'distill' the images and toss out the common ingredients to source the bases.",
    'Recipe could be clearer if it said "Add F, L, A, M, E", perhaps?',
  ];
}
