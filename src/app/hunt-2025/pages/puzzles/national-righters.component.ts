import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-national-righters',
  template: `
    <app-puzzle
      puzzleId="2025-m3"
      titleName="National Righters"
      flavour="Sholmes' case notes, Room 281/2: Two adjoining rooms, similar but not entirely the same. First difference should be enough to figure out what happened here."
      [cannedHints]="cannedHints"
    >
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/1.mp3"
          alt="Common MTG limited format"
          controls
        ></audio>
        (5)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/2.mp3"
          alt="Trouble or afflict someone"
          controls
        ></audio>
        (3)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/3.mp3"
          alt="Give up territory"
          controls
        ></audio>
        (4)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/4.mp3"
          alt="An ugly duckling"
          controls
        ></audio>
        (6)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/5.mp3"
          alt="Don't fall for it"
          controls
        ></audio>
        (4)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/6.mp3"
          alt="A spoken exam"
          controls
        ></audio>
        (4)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/7.mp3"
          alt="Kind and friendly"
          controls
        ></audio>
        (4)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/8.mp3"
          alt="Miku's favourite vegetable"
          controls
        ></audio>
        (4)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/9.mp3"
          alt="A heiroglyphic or emoji, for example"
          controls
        ></audio>
        (6)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/10.mp3"
          alt="Used to shred cheese"
          controls
        ></audio>
        (6)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/11.mp3"
          alt="Whipped dessert with air bubbles"
          controls
        ></audio>
        (6)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/12.mp3"
          alt="Has a disparity with casters, in D&D parlance"
          controls
        ></audio>
        (7)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/13.mp3"
          alt="Cuisine featuring tom yum"
          controls
        ></audio>
        (4)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/14.mp3"
          alt="Measure of energy"
          controls
        ></audio>
        (5)
      </div>
      <div class="flex flex-row items-center mb-2">
        <audio
          class="mr-2"
          src="./2025/national-righters/15.mp3"
          alt="Devoid of life"
          controls
        ></audio>
        (6)
      </div>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class NationalRightersComponent {
  cannedHints = [
    'Perhaps the audio recordings suggest saying back the answers?',
    "The words sound rather ambiguous when read out, don't they?",
    "As I've already noted, the first difference is all you need to spot.",
  ];
}
