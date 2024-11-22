import { Component } from '@angular/core';
import { PuzzleComponent } from '../../ui/puzzle.component';

@Component({
  template: ` <app-puzzle
    titleName="Capsule Machine"
    flavour="Eventually, you make it to your gate, only to find out that the flight is overbooked and they're picking people to kick off based on a questionnaire. Is there a way you can make sure you get on your plane...?"
  >
    <p> Prince's year to party (4) </p> <p> Biblical boat (3) </p>
    <p> Subway biscuit (6) </p>
    <p> Cast of musicians or actors (8) </p>
    <p> Cover for something illegal (5) </p>
    <p> They run the world (5) </p>
    <p> Animal or plant, for example (7) </p> <p> Comes closer (5) </p>
    <p> Subscription platform, for short (2) </p> <p> Long for (4) </p>
    <p> Game also known as Othello (7) </p>
    <p> Iron, or red dot (6) </p> <p> Mixes in a pot (5) </p>
    <p> Greek goddess of justice (6) </p> <p> Earnings (5) </p>
    <p> Worldwide Universities Network (3) </p>
    <p> Windy, as in high places? (9) </p>
  </app-puzzle>`,
  imports: [PuzzleComponent],
})
export class PuzzleThreeComponent {}
