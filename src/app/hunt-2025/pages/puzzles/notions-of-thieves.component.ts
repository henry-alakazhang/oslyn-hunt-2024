import { Component, computed, inject } from '@angular/core';
import { AnswerService } from '../../../answer.service';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  selector: 'app-notions-of-thieves',
  template: `
    <app-puzzle
      puzzleId="2025-meta"
      titleName="Notions of Thieves"
      flavour=""
      [cannedHints]="[]"
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
