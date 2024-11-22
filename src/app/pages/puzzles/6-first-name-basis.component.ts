import { Component } from '@angular/core';
import { PuzzleComponent } from '../../ui/puzzle.component';

@Component({
  template: `<app-puzzle
    titleName="First Name Basis"
    flavour="Given your rather big mistake, you decide to book a tour group for the rest of the trip. You're young - you can make friends, right? You did see a group at the hotel but the guide's name has popped clean out of your head..."
    extraHint="Click the image to get a spreadsheet"
  >
    <a
      class="block w-fit"
      href="https://docs.google.com/spreadsheets/d/1dLSqnkq5VREEAvloKKgU-jZsRdqE_pK8pL_DKYcFH-U/edit?usp=sharing"
      target="_blank"
    >
      <img src="first-name-basis.png" />
    </a>
  </app-puzzle>`,
  imports: [PuzzleComponent],
})
export class PuzzleSixComponent {}
