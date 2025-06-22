import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  template: `<app-puzzle
    puzzleId="5"
    titleName="Parallel Universes"
    flavour="
      You've finally arrived at your east-cost seaside holiday destination!
      Except... something's wrong here. Is this the right place? Was that the right flight?
      Or did you take a bad turn somewhere?"
    [cannedHints]="cannedHints"
  >
    <div class="flex flex-col max-w-3xl">
      @for (img of [1, 2, 3, 4, 5, 6]; track $index) {
      <img class="mb-2" src="parallel-universes/{{ img }}.jpg" />
      }
    </div>
  </app-puzzle>`,
  imports: [PuzzleComponent],
})
export class PuzzleFiveComponent {
  protected cannedHints = [
    "Each Travolta is in front of a building in a certain city. You'll want to take note of the street number and name, as well as the city.",
    'The city is both perfectly correct and absolutely wrong at the same time',
    "If I had a pound for every British lord with multiple cities in Commonwealth countries named after them, I'd be a shockingly rich man.",
    "Consider the addresses you've got and figure out where Travolta actually wanted to go.",
  ];
}
