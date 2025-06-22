import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-puzzle-1',
  imports: [PuzzleComponent],
  template: ` <app-puzzle
    puzzleId="1"
    titleName="Sekai"
    flavour="You've decided: it's time for a vacation.
      You absent-mindedly start scrolling through all your pinned
      websites to find some inspo. Where to go... where to go..."
    extraHint="(the answer is a proper noun)"
    [cannedHints]="cannedHints"
  >
    <div>
      Two new / two old
      <div class="flex flex-row flex-wrap align-center space-x-1 space-y-1">
        <img class="w-12" src="./sekai/1-1.webp" />
        <img class="w-12" src="./sekai/1-2.webp" />
        <img class="w-12" src="./sekai/1-3.webp" />
        <img class="w-12" src="./sekai/1-4.webp" />
        <img class="w-12" src="./sekai/1-5.webp" />
        <img class="w-12" src="./sekai/1-6.webp" />
        <img class="w-12" src="./sekai/1-7.webp" />
        <img class="w-12" src="./sekai/1-8.webp" />
        <img class="w-12" src="./sekai/1-9.webp" />
        <img class="w-12" src="./sekai/1-10.webp" />
        <img class="w-12" src="./sekai/1-11.webp" />
        <img class="w-12" src="./sekai/1-12.webp" />
        <img class="w-12" src="./sekai/1-13.webp" />
        <p class="text-3xl">?</p>
      </div>
    </div>
    <div>
      Three old
      <div class="flex flex-row flex-wrap space-x-1 space-y-1">
        <img class="w-12" src="./sekai/2-1.webp" />
        <img class="w-12" src="./sekai/2-2.webp" />
        <img class="w-12" src="./sekai/2-3.webp" />
        <img class="w-12" src="./sekai/2-4.webp" />
        <img class="w-12" src="./sekai/2-5.webp" />
        <img class="w-12" src="./sekai/2-6.webp" />
        <img class="w-12" src="./sekai/2-7.webp" />
        <img class="w-12" src="./sekai/2-8.webp" />
        <img class="w-12" src="./sekai/2-9.webp" />
        <img class="w-12" src="./sekai/2-10.webp" />
        <img class="w-12" src="./sekai/2-11.webp" />
        <img class="w-12" src="./sekai/2-12.webp" />
        <p class="text-3xl">?</p>
      </div>
    </div>
    <div>
      One old / one new / one old
      <div class="flex flex-row flex-wrap space-x-1 space-y-1">
        <img class="w-12" src="./sekai/3-1.webp" />
        <img class="w-12" src="./sekai/3-2.webp" />
        <img class="w-12" src="./sekai/3-3.webp" />
        <img class="w-12" src="./sekai/3-4.webp" />
        <img class="w-12" src="./sekai/3-5.webp" />
        <img class="w-12" src="./sekai/3-6.webp" />
        <img class="w-12" src="./sekai/3-7.webp" />
        <img class="w-12" src="./sekai/3-8.webp" />
        <img class="w-12" src="./sekai/3-9.webp" />
        <img class="w-12" src="./sekai/3-10.webp" />
        <img class="w-12" src="./sekai/3-11.webp" />
        <img class="w-12" src="./sekai/3-12.webp" />
        <img class="w-12" src="./sekai/3-13.webp" />
        <p class="text-3xl">?</p>
      </div>
    </div>
    <div>
      Four new / one old
      <div class="flex flex-row flex-wrap space-x-1 space-y-1">
        <img class="w-12" src="./sekai/4-1.webp" />
        <img class="w-12" src="./sekai/4-2.webp" />
        <img class="w-12" src="./sekai/4-3.webp" />
        <img class="w-12" src="./sekai/4-4.webp" />
        <img class="w-12" src="./sekai/4-5.webp" />
        <img class="w-12" src="./sekai/4-6.webp" />
        <img class="w-12" src="./sekai/4-7.webp" />
        <img class="w-12" src="./sekai/4-8.webp" />
        <img class="w-12" src="./sekai/4-9.webp" />
        <img class="w-12" src="./sekai/4-10.webp" />
        <img class="w-12" src="./sekai/4-11.webp" />
        <img class="w-12" src="./sekai/4-12.webp" />
        <img class="w-12" src="./sekai/4-13.webp" />
        <img class="w-12" src="./sekai/4-14.webp" />
        <img class="w-12" src="./sekai/4-15.webp" />
        <img class="w-12" src="./sekai/4-16.webp" />
        <img class="w-12" src="./sekai/4-17.webp" />
        <img class="w-12" src="./sekai/4-18.webp" />
        <p class="text-3xl">?</p>
      </div>
    </div>
  </app-puzzle>`,
})
export class PuzzleOneComponent {
  protected cannedHints = [
    "These are pins from a video game series. They're grouped by brand to make them easier to find.",
    'Do the extracted sentence fragments not sound familiar? Maybe try singing?',
    'If you have a four letter word, consider the theme of the puzzle to get the answer',
  ];
}
