import { Component } from '@angular/core';
import { PuzzleComponent } from '../../ui/puzzle.component';

@Component({
  template: `<app-puzzle
    puzzleId="m"
    titleName="Hunters and Gatherers"
    flavour="Ginormous hiccups aside, you do end up have a long and enjoyable (if initially stressful) holiday. Arriving back home, you greet your old neighbour Giovan and check your mailbox. There's only one thing inside - it looks like an invoice but you can't make any sense of it."
    extraHint="(note: this puzzle was written in October 2024)"
  >
    <table class="font-mono border-separate border-spacing-x-3">
      <tr>
        <td> Professor Layton and the Virtuous College</td>
        <td> 2ZLHR3QGFCBFQOQTXMXLOWFBTXFMW! </td>
      </tr>
      <tr>
        <td> Professor Layton and Porygon's Biz</td>
        <td> EIJQLLEZHAWXDJULQWIOWIYHDWZYDD </td>
      </tr>
      <tr>
        <td> Professor Layton and the Lone Faroe</td>
        <td> BZPNGKMZFNGVWNPR!URXWJOHKIVQUA </td>
      </tr>
      <tr>
        <td> Professor Layton and the Stellar's Call</td>
        <td> MIGEHXMFHANKQGBJKGZOFTVFZHPBCW </td>
      </tr>
      <tr>
        <td> Professor Layton and the Miracle Mark</td>
        <td> ONYCZGJGGLGWJNLTUMNLJNMDROYEXA </td>
      </tr>
      <tr>
        <td> Professor Layton and the Advent Legendary</td>
        <td> JCYOUARBZOITOUGHPHNWVIRDQIUWDP </td>
      </tr>
    </table>
  </app-puzzle>`,
  imports: [PuzzleComponent],
})
export class PuzzleMetaComponent {}
