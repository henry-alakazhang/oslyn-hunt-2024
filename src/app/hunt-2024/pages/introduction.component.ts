import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
    <h1 class="text-2xl underline mb-1">Introduction</h1>
    <div class="text-md">
      <p class="mb-2">
        Welcome to OSLYN+Kirbs Hunt 2024! This is a puzzle hunt similar to
        Galactic Hunt and other online puzzle hunts. A couple of things to note:
      </p>

      <ul class="list-disc list-inside space-y-1">
        <li>
          There are 6 puzzles, plus a meta-puzzle. Two puzzles are unlocked
          initially, and each completed puzzle unlocks another.
        </li>
        <li>
          Every bit of text on a puzzle is part of the puzzle. That includes the
          title, flavour text and (obviously) the puzzle body.
        </li>
        <li>
          Answers only contain alphabetic characters and are not case-sensitive.
        </li>
        <li>
          This is a fully client-side hunt, meaning there's no server hosting
          this, no timer, and no leaderboard. You can (and should) do this
          puzzle in a team, but there's nothing to track that for you. Each of
          you will have to enter the answers in your browser to unlock more
          puzzles.
        </li>
        <li>
          You do not need to inspect element, look at the source or view the
          code for the repository in order to solve the puzzles. You can't cheat
          like that, either. Even though the answers are validated client-side,
          they aren't stored in plaintext.
        </li>
        <li>
          The puzzles lean somewhat pop-culture-heavy in references and themes.
        </li>
      </ul>
    </div>
  `,
})
export class IntroductionComponent {}
