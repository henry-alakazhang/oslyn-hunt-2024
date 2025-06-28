import { Component, computed, inject } from '@angular/core';
import { AnswerService } from '../../../answer.service';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-notions-of-thieves',
  template: `
    <app-puzzle
      puzzleId="2025-meta"
      titleName="Notions of Thieves"
      flavour="Sholmes' case notes, The Vault: Come back here after taking a look at the rooms, Wilson. Once you get the evidence in order, you should be able to figure out who the thief is working for. Just make sure not to fall for any fool's gold or orange herrings."
      [cannedHints]="cannedHints"
    >
      <img class="mb-4" src="./2025/notions-of-thieves.jpg" />

      <table class="border-collapse">
        <thead class="border">
          <tr>
            <th class="border p-1">Puzzle</th>
            <th class="border p-1 w-40">Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-1">Of a Feather</td>
            <td class="border p-1">{{ correctAnswers['2025-e1']() }}</td>
          </tr>
          <tr>
            <td class="border p-1">Take Your Time</td>
            <td class="border p-1">{{ correctAnswers['2025-e2']() }}</td>
          </tr>
          <tr>
            <td class="border p-1">Answer (Pronounced 'Answer')</td>
            <td class="border p-1">{{ correctAnswers['2025-m1']() }}</td>
          </tr>
          <tr>
            <td class="border p-1">Colours Picked</td>
            <td class="border p-1">{{ correctAnswers['2025-m2']() }}</td>
          </tr>
          <tr>
            <td class="border p-1">National Righters</td>
            <td class="border p-1">{{ correctAnswers['2025-m3']() }}</td>
          </tr>
          <tr>
            <td class="border p-1">Each Shapen Sister Her Domain</td>
            <td class="border p-1">{{ correctAnswers['2025-h1']() }}</td>
          </tr>
          <tr>
            <td class="border p-1">Flags to Riches</td>
            <td class="border p-1">{{ correctAnswers['2025-h2']() }}</td>
          </tr>
          <tr>
            <td class="border p-1">From Genesis</td>
            <td class="border p-1">{{ correctAnswers['2025-h3']() }}</td>
          </tr>
        </tbody></table
      >
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class NotionsOfThievesComponent {
  cannedHints = [
    'The other rooms may be relevant to getting your thoughts in order.',
    'You already have this hint, Wilson. Take another look at what I named the cases for each room.',
    'The image pictured seems to be from a card game and depicts some guilds, each of which represents two colours out of white, blue, black, red and green.',
  ];

  answerService = inject(AnswerService);

  answerStatus = this.answerService.answerStatus;
  lastAnswer = this.answerService.lastAnswer;

  correctAnswers = {
    '2025-meta': computed(() =>
      this.answerStatus['2025-meta']() ? this.lastAnswer['2025-meta']() : ''
    ),
    '2025-e1': computed(() =>
      this.answerStatus['2025-e1']() ? this.lastAnswer['2025-e1']() : ''
    ),
    '2025-e2': computed(() =>
      this.answerStatus['2025-e2']() ? this.lastAnswer['2025-e2']() : ''
    ),
    '2025-m1': computed(() =>
      this.answerStatus['2025-m1']() ? this.lastAnswer['2025-m1']() : ''
    ),
    '2025-m2': computed(() =>
      this.answerStatus['2025-m2']() ? this.lastAnswer['2025-m2']() : ''
    ),
    '2025-m3': computed(() =>
      this.answerStatus['2025-m3']() ? this.lastAnswer['2025-m3']() : ''
    ),
    '2025-h1': computed(() =>
      this.answerStatus['2025-h1']() ? this.lastAnswer['2025-h1']() : ''
    ),
    '2025-h2': computed(() =>
      this.answerStatus['2025-h2']() ? this.lastAnswer['2025-h2']() : ''
    ),
    '2025-h3': computed(() =>
      this.answerStatus['2025-h3']() ? this.lastAnswer['2025-h3']() : ''
    ),
  };
}
