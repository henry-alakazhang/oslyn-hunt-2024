import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
    <h1 class="text-2xl underline mb-1">Heist at the Time Hotel</h1>
    <div class="text-md">
      <p class="italic mb-2">
        The Time Hotel, the culmination of time science. Crowning glory of the
        43rd century. A celebration of human history.
      </p>

      <p class="italic mb-2"> It's been the victim of a heist. </p>

      <p class="italic mb-2">
        Someone, from somewhen, has broken into the vaults and all the rooms,
        simultaneously stealing from the Hotel and from many places throughout
        human history. Treasure vaults of ancient kingdoms, technological
        secrets from 3000s megacorps, and the personal taxidermy collection of
        the second-to-last King of Bohemia, all gone in the blink of an eye.
      </p>

      <p class="italic mb-2">
        A crime of this magnitude at the Time Hotel would, you might think,
        require the services of a certain historically-famous "consulting
        detective". Unfortunately for him, he has somehow ended up as the prime
        suspect instead.
      </p>

      <p class="italic mb-2">
        Sholmes: Not to fear, Wilson! I may be falsely accused, trapped in this
        gaol cell, with an imminent execution planned in 2-3 business days, but
        not all hope is lost. All you need to do is take my case notes and
        continue to investigate the crime scenes to find the real thief.
      </p>

      <p class="italic mb-2">
        Sholmes: While you may not be quite at my level of intellect,
        perception, anatomical understanding, charisma, fighting strength,
        deductive ability, knowledge of chemistry or intellect, I'm sure you
        will still be able to do it. Remember that you can, of course, consult
        me at any time.
      </p>

      <p class="italic mb-2"> Good luck, Wilson! </p>

      <p class="italic mb-2"> </p>

      <hr class="mb-4" />

      <p class="mb-2">
        Welcome to OSLYN Hunt 2025! This is a puzzle hunt similar to Galactic
        Hunt and other online puzzle hunts. A couple of things to note:
      </p>

      <ul class="list-disc list-inside space-y-1">
        <li>
          There are 8 puzzles, plus a meta-puzzle, all unlocked from the start.
          They are grouped by difficulty, but feel free to tackle them in any
          order.
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
