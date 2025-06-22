import {
  computed,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { md5 } from 'js-md5';

type PuzzleId2024 = '1' | '2' | '3' | '4' | '5' | '6' | 'm';
type PuzzleId2025 = 'e1' | 'e2' | 'm1' | 'm2' | 'm3' | 'h1' | 'h2' | 'h3';

// year + valid ids for that year
export type PuzzleId = `2024-${PuzzleId2024}`;
// | `2025-${PuzzleId2025}`;

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  private answerHashes: { [k in PuzzleId]: string } = {
    '2024-1': 'ee9113a1fbccda4babc4b495489a8284',
    '2024-2': '0becd849028305a772d02330f9a3ba3b',
    '2024-3': 'de0c5de99b5ea3b3f8bc2df1b6dae208',
    '2024-4': '121d66d4a9c1dccf03b574379e46a39f',
    '2024-5': 'f790b7da70ca16b0434d0c5194389d46',
    '2024-6': '72653eebc70ae85b3d34c8e90f6b679b',
    '2024-m': 'd8f65bd8b911c3a4d935e7fc8cf143bf',
  };

  private puzzleIds = Object.keys(this.answerHashes) as PuzzleId[];

  /** A signal for each puzzle with a string containing the most recent answer. */
  lastAnswer: { [k in PuzzleId]: WritableSignal<string> } =
    this.puzzleIds.reduce(
      (acc, id) => ({
        ...acc,
        // For each ID, generate a signal with initial value pulled from localstorage
        [id]: signal(localStorage.getItem(`latest-answer-${id}`) ?? ''),
      }),
      {} as { [k in PuzzleId]: WritableSignal<string> }
    );

  /** A signal for each puzzle with a boolean containing whether or not the puzzle has been solved */
  answerStatus: { [k in PuzzleId]: Signal<boolean> } = this.puzzleIds.reduce(
    (acc, id) => ({
      ...acc,
      // For each ID, generate a signal computed from whether the last answer was correct
      [id]: computed(
        () => md5(this.lastAnswer[id]()) === this.answerHashes[id]
      ),
    }),
    {} as { [k in PuzzleId]: Signal<boolean> }
  );

  submit(puzzle: PuzzleId, answer: string): void {
    const cleanedAnswer = answer.toLowerCase().replace(/[^a-z]/g, '');
    localStorage.setItem(`latest-answer-${puzzle}`, cleanedAnswer);
    this.lastAnswer[puzzle].set(cleanedAnswer);
  }
}
