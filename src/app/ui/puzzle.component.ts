import { Component, inject, Input, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnswerService, PuzzleId } from '../answer.service';

@Component({
  selector: 'app-puzzle',
  imports: [FormsModule],
  template: `
    <div>
      <h2 class="text-xl underline">{{ titleName }}</h2>
      <p class="italic mb-4">{{ flavour }}</p>
      @if(extraHint) { <p class="italic text-sm mb-4">{{ extraHint }}</p> }
      <hr class="mb-4" />
      <div class="mb-4">
        <ng-content></ng-content>
      </div>

      <hr class="mb-4" />

      <div>
        <input
          class="rounded-md p-1 mr-1 bg-transparent border border-slate-400"
          type="text"
          [disabled]="isAnswered()"
          [(ngModel)]="submitAnswer"
        />
        <button
          class="rounded-md p-1 border border-slate-400 bg-slate-100 hover:bg-slate-200 active:bg-slate-300"
          type="submit"
          [class.pointer-events-none]="isAnswered()"
          [disabled]="isAnswered()"
          (click)="submit()"
        >
          Submit
        </button>
      </div>
      @if (isAnswered()) {
      <p>
        You have solved this puzzle! The answer was
        <span class="font-bold">{{ lastAnswer() }}</span
        >.
      </p>
      }
    </div>
  `,
})
export class PuzzleComponent implements OnInit {
  @Input() puzzleId: PuzzleId;
  @Input() titleName: string;
  @Input() flavour: string;
  @Input() extraHint: string;
  /** MD5 hash of the answer */
  @Input() answerHash: string;

  protected submitAnswer = '';
  protected lastAnswer: Signal<string>;
  protected isAnswered: Signal<boolean>;

  answerService = inject(AnswerService);

  ngOnInit() {
    this.lastAnswer = this.answerService.lastAnswer[this.puzzleId];
    this.isAnswered = this.answerService.answerStatus[this.puzzleId];
  }

  submit(): void {
    this.answerService.submit(this.puzzleId, this.submitAnswer);
    this.submitAnswer = '';
  }
}
