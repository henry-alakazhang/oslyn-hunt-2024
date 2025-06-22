import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-from-genesis',
  template: `
    <app-puzzle
      puzzleId="2025-h2"
      titleName="From Genesis"
      flavour=""
      answerHash=""
      [cannedHints]="[]"
    >
      <div class="flex flex-row">
        <div class="basis-24 mx-2">
          <img src="./2025/from-genesis.png" />
          <img src="./2025/from-genesis.png" />
        </div>
        <div class="basis-48 mx-2">
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
        <div class="basis-28 mx-2">
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
export class FromGenesisComponent {}
