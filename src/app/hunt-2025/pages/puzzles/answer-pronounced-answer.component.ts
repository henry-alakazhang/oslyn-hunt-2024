import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-answer-pronounced-answer',
  template: `
    <app-puzzle
      puzzleId="2025-m1"
      titleName="Answer (Pronounced 'Answer')"
      flavour=""
      [cannedHints]="[]"
    >
      <div class="mb-3">
        <h2>"_ _ _ _ _ _ _" (3)</h2>
        There once was a man from Great Dublin <br />
        Who found himself with cheese quite troubling <br />
        With his dog and a box <br />
        He flew up to the fox <br />
        And found a wide world of dairy rumbling <br />
      </div>

      <div class="mb-3">
        <h2>"_ _ _ _ _ _ _ . _ _ _ _ _ _ (5)"</h2>
        There once was an old man from sea <br />
        Who had more brains than he had modestly <br />
        His little grey demolished <br />
        Worked logical abolished <br />
        And so solved his fair share of odyssey <br />
      </div>

      <div class="mb-3">
        <h2>"_ _ _ _ _ _ _ . _ _ _ _ (3)"</h2>
        There once was a young lad from great<br />
        Whos childhood was just a bit innate <br />
        He turned towards spells <br />
        As a young cells <br />
        And police from the Fae world came discombobulate <br />
      </div>

      <div class="mb-3">
        <h2>"_ _ _ _ _ _ _ . _ _ _ _ _ (12)"</h2>
        There once was a man from down by the Devon <br />
        Who lived a life simply and seven <br />
        But for one moon <br />
        On the 16th of spoon <br />
        He went (in a day) through an heaven <br />
      </div>

      <div class="mb-3">
        <h2>"_ _ _ _ _ _ _ _ _ _ (6)"</h2>
        There once was a boy from Brussels <br />
        Who looked like he came from a tussles <br />
        With bread in his martinis <br />
        He became an bikinis <br />
        And started a fresh life muscles <br />
      </div>

      <div class="mb-3">
        <h2>"_ _ _ _ _ . _ _ _ _ (4)"</h2>
        There once was a fellow from Britain <br />
        Who sent quite a few men to smitten<br />
        With vodka afternoon <br />
        And girls in June <br />
        His codename: two O's and a unbitten <br />
      </div>

      <div class="mb-3">
        <h2>"_ _ _ _ _ _ . _ _ _ _ (1)"</h2>
        There was a bloke forced into space <br />
        Who tried to block new routes race <br />
        But when his house was abstruse <br />
        And his planet recluse <br />
        He ended up going someplace <br />
      </div>

      <div class="mb-3">
        <h2>"_ _ _ . _ _ _ _ _ _ (6)"</h2>
        There once was a fellow from Peru <br />
        Who thought himself last of his zoo <br />
        He lived in a hat <br />
        And was ever a expat <br />
        But he'd always be sometime anew <br />
      </div>

      <div class="mb-3">
        <h2>"_ _ _ _ _ _ _ _ . _ _ _ _ _ _ (2)"</h2>
        I know of a man rather striking <br />
        Whose mental is something turnpiking <br />
        Though he's quite a mastermind <br />
        And his thoughts are crime <br />
        His deductions hitchhiking <br />
      </div>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class AnswerPronouncedAnswerComponent {}
