import { Component } from '@angular/core';
import { PuzzleComponent } from '../../ui/puzzle.component';

@Component({
  template: ` <app-puzzle
    puzzleId="3"
    titleName="Capsule Machine"
    flavour="
      Eventually, you make it to your gate, only to find out that there's been a mixup and the flight is overbooked!
      It looks they're like picking people to board basically at random!
      Is there a way you can make sure you get on your plane?
    "
    [cannedHints]="cannedHints"
  >
    <p> Prince's year to party (4) </p>
    <p> Biblical boat (3) </p>
    <p> Subway biscuit (6) </p>
    <p> Cast of musicians or actors (8) </p>
    <p> Cover for something illegal (5) </p>
    <p> They run the world (5) </p>
    <p> Animal or plant, for example (7) </p>
    <p> Comes closer (5) </p>
    <p> Subscription platform, for short (2) </p>
    <p> Long for (4) </p>
    <p> Game also known as Othello (7) </p>
    <p> Iron, or red dot (6) </p>
    <p> Mixes in a pot (5) </p>
    <p> Greek goddess of justice (6) </p>
    <p> Earnings (5) </p>
    <p> Worldwide Universities Network (3) </p>
    <p> Windy, as in high places? (9) </p>
  </app-puzzle>`,
  imports: [PuzzleComponent],
})
export class PuzzleThreeComponent {
  protected cannedHints = [
    "Some of the answer words are related to each other, except they're a little wrong. The title might help here.",
    "There's a list of these on Wikipedia you should be able to use to match the 7 names.",
  ];
}
