import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-each-shapen-sister',
  template: `
    <app-puzzle
      puzzleId="2025-h1"
      titleName="Each Shapen Sister Her Domain"
      flavour="Sholmes' case notes, Room 521: Curious. Five people seem to have shared this room at different times."
      extraHint="No knowledge of the referenced game is required to solve this puzzle. But you should really play it."
      [cannedHints]="cannedHints"
    >
      <div class="flex flex-col md:flex-row align-baseline mb-2">
        <div
          class="w-36 text-center text-white"
          style="background-color: #0099FF"
        >
          WATCHER
        </div>
        <div class="w-36 text-center" style="background-color: #FF9900">
          BANG BANG FIRE
        </div>
        <div class="w-36 text-center" style="background-color: #00FF00">
          FIXER
        </div>
        <div
          class="w-36 text-center text-white"
          style="background-color: #FF00FF"
        >
          HEALER
        </div>
        <div
          class="w-36 text-center text-white"
          style="background-color: #9900FF"
        >
          KNOWER
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="mb-2 mr-2">
          <img src="./2025/each-shapen-sister.png" />
        </div>
        <div>
          <p class="font-bold"> Across </p>
          <p> Valid excuse for claiming innocence </p>
          <p> Topically applied creams for soothing </p>
          <p> Modifications to images or videos </p>
          <p> Romeo's fate worse than death </p>
          <p> Nesting spot of eagles, etc. </p>
          <p> Place where earthquakes are likelier </p>
          <p> Per Newton, mass times acceleration </p>
          <p> Center of the cardiovascular system </p>
          <p> Intentionally saying things to mislead </p>
          <p> Innocent, or not worldly enough </p>
          <p> Endgame activities in most MMOs </p>
          <p> Imitating styles from the past </p>
          <p> Wake, or anger, someone else </p>
          <p> Sense associated with the eyes </p>
          <p> A viewing angle, often impressive </p>

          <p class="font-bold mt-2"> Down </p>
          <p> Notify alcoholic "college drift king"! </p>
          <p> Happiness start becomes boron delivery </p>
          <p> Reshape metal for General Electric </p>
          <p> Python creator swaps last tutorial </p>
          <p> Find knowledge within clear noodles </p>
          <p> Springfield snipers search stuff suspiciously </p>
          <p> Conquer so-called bodies of water </p>
          <p> Messed up tent's arterial insertion </p>
          <p> Chump's stool, start to finish </p>
          <p> Crazy wives' ways of thinking </p>
        </div>
      </div>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class EachShapenSisterComponent {
  cannedHints = [
    "There doesn't seem to be a length on these crossword clues, but I suspect you should be able to tell how long they all are.",
    "They definitely are crossword clues, even if there isn't necessarily a full grid to fill...",
    'Are there any Connections between the clues?',
  ];
}
