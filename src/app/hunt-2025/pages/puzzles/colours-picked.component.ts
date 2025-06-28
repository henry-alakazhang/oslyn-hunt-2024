import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-colours-picked',
  template: `
    <app-puzzle
      puzzleId="2025-m2"
      titleName="Colours Picked"
      flavour=""
      [cannedHints]="[]"
    >
      <div class="flex flex-row flex-wrap">
        <img width="250" src="./2025/colours-picked/1.jpg" />
        <img width="250" src="./2025/colours-picked/2.jpg" />
        <img width="250" src="./2025/colours-picked/3.jpg" />
        <img width="250" src="./2025/colours-picked/4.jpg" />
        <img width="250" src="./2025/colours-picked/5.jpg" />
        <img width="250" src="./2025/colours-picked/6.jpg" />
        <img width="250" src="./2025/colours-picked/7.jpg" />
      </div>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class ColoursPickedComponent {}
