import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-national-righters',
  template: `
    <app-puzzle
      puzzleId="2025-m3"
      titleName="National Righters"
      flavour=""
      answerHash=""
      [cannedHints]="[]"
    >
      <p>Common MTG limited format (5)</p>
      <p> Trouble or afflict someone (3)</p> <p> Give up territory (4)</p>
      <p> An ugly duckling (6)</p> <p> Don't fall for it! (4)</p>
      <p> A spoken exam (4)</p> <p> Kind and friendly (4)</p>
      <p> Miku's favourite vegetable (4)</p>
      <p> A heiroglyphic or an emoji, for example (6)</p>
      <p> Used to shred cheese (6)</p>
      <p> Whipped dessert with air bubbles (6)</p>
      <p> Has a disparity with casters, in D&D parlance (7)</p>
      <p> Cuisine featuring tom yum and massaman (4)</p>
      <p> Measure of energy (5)</p> <p> Devoid of life (6)</p>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class NationalRightersComponent {}
