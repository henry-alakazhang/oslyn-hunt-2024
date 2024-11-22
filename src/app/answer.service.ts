import {
  computed,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { md5 } from 'js-md5';

export type PuzzleId = '1' | '2' | '3' | '4' | '5' | '6' | 'm';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  private answerHashes: { [k in PuzzleId]: string } = {
    1: 'ee9113a1fbccda4babc4b495489a8284',
    2: '0becd849028305a772d02330f9a3ba3b',
    3: 'de0c5de99b5ea3b3f8bc2df1b6dae208',
    4: '121d66d4a9c1dccf03b574379e46a39f',
    5: 'f790b7da70ca16b0434d0c5194389d46',
    6: '72653eebc70ae85b3d34c8e90f6b679b',
    m: 'd8f65bd8b911c3a4d935e7fc8cf143bf',
  };

  lastAnswer: { [k in PuzzleId]: WritableSignal<string> } = {
    1: signal(localStorage.getItem(`latest-answer-1`) ?? ''),
    2: signal(localStorage.getItem(`latest-answer-2`) ?? ''),
    3: signal(localStorage.getItem(`latest-answer-3`) ?? ''),
    4: signal(localStorage.getItem(`latest-answer-4`) ?? ''),
    5: signal(localStorage.getItem(`latest-answer-5`) ?? ''),
    6: signal(localStorage.getItem(`latest-answer-6`) ?? ''),
    m: signal(localStorage.getItem(`latest-answer-m`) ?? ''),
  };

  answerStatus: { [k in PuzzleId]: Signal<boolean> } = {
    1: computed(() => md5(this.lastAnswer[1]()) === this.answerHashes[1]),
    2: computed(() => md5(this.lastAnswer[2]()) === this.answerHashes[2]),
    3: computed(() => md5(this.lastAnswer[3]()) === this.answerHashes[3]),
    4: computed(() => md5(this.lastAnswer[4]()) === this.answerHashes[4]),
    5: computed(() => md5(this.lastAnswer[5]()) === this.answerHashes[5]),
    6: computed(() => md5(this.lastAnswer[6]()) === this.answerHashes[6]),
    m: computed(() => md5(this.lastAnswer['m']()) === this.answerHashes['m']),
  };

  submit(puzzle: PuzzleId, answer: string): void {
    const cleanedAnswer = answer.toLowerCase().replace(/[^a-z]/g, '');
    localStorage.setItem(`latest-answer-${puzzle}`, cleanedAnswer);
    this.lastAnswer[puzzle].set(cleanedAnswer);
  }
}
