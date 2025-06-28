import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-from-genesis',
  template: `
    <app-puzzle
      puzzleId="2025-h3"
      titleName="From Genesis..."
      flavour="Sholmes' case notes, Room 203: A book has been torn to pieces in here. Reminds me of the time Mycroft insulted King James and was forced to cut his latest essay into words."
      [cannedHints]="cannedHints"
    >
      <div class="flex flex-col">
        <div class="flex flex-row items-baseline gap-2 mb-2">
          <p class="text-5xl"> ... </p>
          <img src="./2025/from-genesis.png" />
          <img src="./2025/from-genesis.png" />
        </div>
        <div class="mb-2">
          <p> -AND- </p>
          <p> ANOTHER- </p>
          <p> -AT- </p>
          <p> BREATH- </p>
          <p> -CHANGE </p>
          <p> CRIMEA- </p>
          <p> -DAUGHTER </p>
          <p> -DAWN </p>
          <p> -DESTINY </p>
          <p> -HOPE </p>
          <p> -IN- </p>
          <p> INHERITORS- </p>
          <p> -LIGHT </p>
          <p> -MARCHES </p>
          <p> MOTHER- </p>
          <p> NAGA'S- </p>
          <p> -OF- </p>
          <p> -OF- </p>
          <p> -OF- </p>
          <p> -OF- </p>
          <p> PHANTOM- </p>
          <p> REUNION- </p>
          <p> -RUIN </p>
          <p> SERENITY- </p>
          <p> -SHIP </p>
          <p> -SPIRITS </p>
          <p> SWORD- </p>
          <p> -VOICE </p>
          <p> WINDS- </p>
        </div>
        <div class="flex flex-row gap-2">
          <p> 103 </p>
          <p> 12 </p>
          <p> 20 </p>
          <p> 84 </p>
          <p> 62 </p>
          <p> 35 </p>
          <p> 34 </p>
          <p> 26 </p>
          <p> 78 </p>
          <p> 42 </p>
          <p> 49 </p>
        </div>
      </div>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class FromGenesisComponent {
  cannedHints = [
    'Some of these seem to be proper nouns, though I suspect neither of us have never been to the Crimea mentioned here.',
    'Perhaps these entries and chapters can be turned into chapters and verses?',
    'Chapters and verses... from Genesis!',
  ];
}
