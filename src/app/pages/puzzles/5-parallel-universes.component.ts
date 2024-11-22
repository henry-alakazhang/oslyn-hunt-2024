import { Component } from '@angular/core';
import { PuzzleComponent } from '../../ui/puzzle.component';

@Component({
  template: `<app-puzzle
    puzzleId="5"
    titleName="Parallel Universes"
    flavour="You've finally arrived at your seaside holiday destination! Except... something's wrong here. Was that the right flight? Or did you take a bad turn somewhere?"
  >
    <div class="flex flex-col max-w-3xl">
      @for (img of [1, 2, 3, 4, 5, 6]; track $index) {
      <img class="mb-2" src="parallel-universes/{{ img }}.jpg" />
      }
    </div>
  </app-puzzle>`,
  imports: [PuzzleComponent],
})
export class PuzzleFiveComponent {}
