import { Component } from '@angular/core';
import { PuzzleComponent } from '../../ui/puzzle.component';

@Component({
  template: `<app-puzzle
    puzzleId="m"
    titleName="Hunters and Gatherers"
    flavour="
      Hiccups aside, you do end up have a long and enjoyable (if initially stressful) holiday.
      Arriving back home, you greet your old neighbour Giovan and check your mailbox.
      There's only one piece of paper inside - it looks like an invoice but there's a puzzling lack of information.
      If you could get it in order, you might be able to figure out what it costs... and what it's for..."
    extraHint="(note: this puzzle was written in October 2024)"
  >
    <table class="font-mono border-separate border-spacing-x-3">
      <tr>
        <td> Professor Layton and the Virtuous College (3) </td>
        <td> 2ZLHR3QGFCBFQOQTXMXLOWFBTXMBXP </td>
      </tr>
      <tr>
        <td> Professor Layton and Porygon's Biz (5) </td>
        <td> EIJQLLEZHAWXDJULQWIOWIYHDWZYDD </td>
      </tr>
      <tr>
        <td> Professor Layton and the Lone Faroe (6) </td>
        <td> BZPNGKMZFNGLAGGEEKWHPYBXPSOFHQ </td>
      </tr>
      <tr>
        <td> Professor Layton and the Supercluster's Call (8) </td>
        <td> MIGEHXMFHANKQGBJKGZOFTVFZHPBCW </td>
      </tr>
      <tr>
        <td> Professor Layton and the Miracle Mark (5) </td>
        <td> ONYCZGJGGLGWJNLTUMNLJNMDROYEXA </td>
      </tr>
      <tr>
        <td> Professor Layton and the Advent Hysteria (7 6) </td>
        <td> JCYOUARBZOITOUGHPHNWVIRDQIUWDP </td>
      </tr>
    </table>
  </app-puzzle>`,
  imports: [PuzzleComponent],
})
export class PuzzleMetaComponent {}
