import { Component, inject, Input, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnswerService, PuzzleId } from '../answer.service';

@Component({
  selector: 'app-puzzle',
  imports: [FormsModule],
  template: `
    <div>
      <div class="flex flex-row justify-between">
        <h2 class="text-xl underline">{{ titleName }}</h2>
        <div>
          Hints: @for (hint of cannedHints; track $index) {
          <button
            class="text-xl cursor-pointer"
            [style]="{
              filter:
                hintsUsed < $index
                  ? 'sepia(90%) brightness(62%) contrast(94%)'
                  : undefined
            }"
            [attr.disabled]="hintsUsed < $index ? '' : undefined"
            [attr.popovertarget]="'hint-' + $index"
            (click)="openHint($index)"
          >
            🥫
          </button>
          <div
            class="h-full w-full bg-slate-400/50 pointer-events-none p-40"
            id="hint-{{ $index }}"
            popover
          >
            <p class="rounded shadow-sm bg-white p-2 max-w-80 m-auto">
              {{ hint }}
            </p>
          </div>
          }
        </div>
      </div>
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
  @Input() cannedHints: string[];
  /** MD5 hash of the answer */
  @Input() answerHash: string;

  protected submitAnswer = '';
  protected lastAnswer: Signal<string>;
  protected isAnswered: Signal<boolean>;

  protected hintsUsed: number;

  answerService = inject(AnswerService);

  ngOnInit() {
    this.lastAnswer = this.answerService.lastAnswer[this.puzzleId];
    this.isAnswered = this.answerService.answerStatus[this.puzzleId];
    this.hintsUsed = Number(
      localStorage.getItem(`puzzle-${this.puzzleId}-hint-count`) ?? 0
    );
  }

  submit(): void {
    this.answerService.submit(this.puzzleId, this.submitAnswer);
    this.submitAnswer = '';
  }

  openHint(index: number): void {
    this.hintsUsed = index + 1;
    localStorage.setItem(`puzzle-${this.puzzleId}-hint-count`, `${index}`);
  }
}
