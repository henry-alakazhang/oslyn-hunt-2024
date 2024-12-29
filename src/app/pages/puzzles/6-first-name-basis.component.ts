import { Component } from '@angular/core';
import { PuzzleComponent } from '../../ui/puzzle.component';

@Component({
  template: `<app-puzzle
    puzzleId="6"
    titleName="First Name Basis"
    flavour="
      Given your rather big mistake, you decide to book a tour group for the rest of the trip.
      You did see a group of young people at the hotel - maybe you could follow their route around the city.
      Only problem is the guide's name has poppsed clean out of your head..."
    extraHint="Click the image to get a spreadsheet"
  >
    <div class="flex flex-col md:flex-row align-middle">
      <a
        class="block w-fit mb-2 mr-2"
        href="https://docs.google.com/spreadsheets/d/1dLSqnkq5VREEAvloKKgU-jZsRdqE_pK8pL_DKYcFH-U/edit?usp=sharing"
        target="_blank"
      >
        <img src="first-name-basis.png" />
      </a>
      <div>
        <p class="font-bold"> Across </p>
        <p> 2. What you hope to have at a party (2 wds) </p>
        <p> 3. Required to get behind a wheel (2 wds) </p>
        <p> 4. How one might describe Queenstown's iconic burger </p>
        <p> 7. Antagonistic protagonist </p>
        <p> 8. Dogs evolved from these </p>
        <p> 10. Largest boa constrictor </p>
        <p> 11. Comes before "dear" or "god" </p>
        <p> 13. Motion-based rhythm game series (2 wds) </p>
        <br />
        <p class="font-bold"> Down </p>
        <p> 1. Lex Luthor or Hannibal Lecter, for example (2 wds) </p>
        <p> 2. All the best, pig!? (3 wds) </p>
        <p> 4. Range of objects, ideas, or opinions </p>
        <p> 5. Forged for the dwarf-lords (2 wds) </p>
        <p> 6. High pressure coffee </p>
        <p> 8. Tarantino film with a sequel (2 wds) </p>
        <p> 9. Hand gesture made for luck </p>
        <p> 12. Alias of hero Nat (2 wds) </p>
      </div>
    </div>
  </app-puzzle>`,
  imports: [PuzzleComponent],
})
export class PuzzleSixComponent {}
