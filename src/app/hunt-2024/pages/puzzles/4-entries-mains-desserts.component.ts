import { Component } from '@angular/core';
import { PuzzleComponent } from '../../../ui/puzzle.component';

@Component({
  template: `<app-puzzle
    puzzleId="2024-4"
    titleName="Entries, Mains, Desserts"
    flavour="
      You are interrupted from your inflight movie by an attendant handing you a series of menus, each thick as a book.
      Now this is more like a holiday - you get a three large meals inflight?!
      You kind of want to game the system and try everything, but you probably should just pick something from each.
      What are you having?
    "
    extraHint="(note: this puzzle was written in October 2024)"
    [cannedHints]="cannedHints"
  >
    <table class="mb-4 border border-black">
      <tr> <td class="px-1"> ENTREE (8) </td> <td class="px-1"> </td> </tr>
      <tr>
        <td class="px-1">
          Sent Back To A Land Of Prehistory, I Have To Make A Great Migration
          With My Dinosaur People
        </td>
        <td class="px-1"> /14 </td>
      </tr>
      <tr>
        <td class="px-1">
          Reverted To The Body Of A Child, Only I Can Solve The Mystery Of This
          Scarlet Letter
        </td>
        <td class="px-1"> /27 </td>
      </tr>
      <tr>
        <td class="px-1">
          How Did I Become Part Of A Side Character Team-Up In This High Speed
          Raging World of Families?
        </td>
        <td class="px-1"> /11 </td>
      </tr>
      <tr>
        <td class="px-1">
          They're Both Called Henry? A Thrilling Father-And-Son's Final Search
          For The Holy Grail!
        </td>
        <td class="px-1"> /5 </td>
      </tr>
      <tr class="border-b border-black">
        <td class="px-1">
          My Buddy "Covalent" Jimmy Says He Refuses To Perish Here Or Now!
        </td>
        <td class="px-1"> /25 </td>
      </tr>
      <tr>
        <td class="px-1">
          Under A Killer Machine's Iron Fist, Only We Can Save Ourselves
        </td>
        <td class="px-1"> /6 </td>
      </tr>
      <tr>
        <td class="px-1">
          In A World Where Dinosaurs Are Real, Are Empires Destined To Collapse?
        </td>
        <td class="px-1"> /7 </td>
      </tr>
      <tr>
        <td class="px-1">
          I Thought Cats And Mice Hated Each Other But These Two Are Secretly
          Members Of Interpol?
        </td>
        <td class="px-1"> /17 </td>
      </tr>
      <tr>
        <td class="px-1">
          My Third Adventure With Friends From A Digital World Is Bittersweet,
          But The Future Is In Sight
        </td>
        <td class="px-1"> /11 </td>
      </tr>
      <tr>
        <td class="px-1">
          We Live In A Marvellous Universe But Even Here, War Will Never End
        </td>
        <td class="px-1"> /40 </td>
      </tr>
      <tr>
        <td class="px-1">
          Boldly Going Through Time To Make Sure Humanity Makes It To Space To
          Meet Aliens!
        </td>
        <td class="px-1"> /14 </td>
      </tr>
    </table>
    <table class="mb-4 border border-black">
      <tr> <td class="px-1"> MAIN (8) </td> <td class="px-1"> </td> </tr>
      <tr>
        <td class="px-1">
          In A World With Endless Summer, Can Those Who've Never Experienced It
          Survive The Cold Season?
        </td>
        <td class="px-1"> /7 </td>
      </tr>
      <tr>
        <td class="px-1">
          Another Day In The Life Of The Greatest Girl Detective; Have I Met My
          Match At This Overgrown Manor?
        </td>
        <td class="px-1"> /175 </td>
      </tr>
      <tr>
        <td class="px-1">
          Where Are All The Men At In This Ring World City's Police Force?
        </td>
        <td class="px-1"> /41 </td>
      </tr>
      <tr class="border-b border-black">
        <td class="px-1">
          After My Parents Died, My Life Has Just Been One Spot Of Bad Luck
          After The Other, But It's Over Now!
        </td>
        <td class="px-1"> /13 </td>
      </tr>
      <tr>
        <td class="px-1">
          In The Worst Of Times For My Cat Clan, I Must Unravel This Prophecy!
        </td>
        <td class="px-1"> /49 </td>
      </tr>
      <tr>
        <td class="px-1">
          Born As A God King To Rule These Sands, I Must Crush The Apostates
          Threatening My Power!
        </td>
        <td class="px-1"> /8 </td>
      </tr>
      <tr>
        <td class="px-1">
          After Gaining Demigod Powers Alongside My Friends, I Now Must Travel
          Beast-Infested Waters To Save Them
        </td>
        <td class="px-1"> /7 </td>
      </tr>
      <tr>
        <td class="px-1">
          Born Without Powers In A World Of The Elements, I Must Deal With Roman
          Legionnaires and Greek Spirits Myself
        </td>
        <td class="px-1"> /6 </td>
      </tr>
      <tr>
        <td class="px-1">
          The Great Cycle Of Time Continues, But I Will Remember The Glow Of Day
        </td>
        <td class="px-1"> /14 </td>
      </tr>
      <tr>
        <td class="px-1">
          I'm Sick Of This! I Keep Encountering Horrors That Make My Skin Crawl
          But I Refuse To Be Frightened!
        </td>
        <td class="px-1"> /62 </td>
      </tr>
      <tr>
        <td class="px-1">
          I'm The Apprentice To The Apprentice Hunter And I Must Win This Duel
          To Save My Father!
        </td>
        <td class="px-1"> /18 </td>
      </tr>
    </table>
    <table class="mb-4 border border-black">
      <tr> <td class="px-1"> DESSERT (8) </td> <td class="px-1"> </td> </tr>
      <tr>
        <td class="px-1">
          A Mute Hero: My Story Of Saving The Princess While My Country Weeps
          Around Me
        </td>
        <td class="px-1"> /20 </td>
      </tr>
      <tr>
        <td class="px-1">
          The Wyvern's Endless Journey, Ever Marching Toward An Era I Can Hear
          But Never Reach
        </td>
        <td class="px-1"> /11 </td>
      </tr>
      <tr>
        <td class="px-1">
          As Soon As My Family Moves to Spain, I'm Sent On A School Trip With
          Pocket-Size Pals!
        </td>
        <td class="px-1"> /9 </td>
      </tr>
      <tr>
        <td class="px-1">
          A World Where Everyone Is a Hero Of Light But Half Of Them Shirk Their
          Duties To Roleplay Weird Things!
        </td>
        <td class="px-1"> /16 </td>
      </tr>
      <tr>
        <td class="px-1">
          Forced To Choose Between Destinies, This Flaming Crest In My Soul Will
          Guide Me!
        </td>
        <td class="px-1"> /17 </td>
      </tr>
      <tr>
        <td class="px-1">
          This Is It! Everyone Is Here For The Greatest Fraternal Fight Club!
        </td>
        <td class="px-1"> /5 </td>
      </tr>
      <tr class="border-b border-black">
        <td class="px-1">
          My Life As An Alchemist Would Have Been Cute And Easy If I Didn't Have
          To Go On This Strange Trip
        </td>
        <td class="px-1"> /27 </td>
      </tr>
      <tr>
        <td class="px-1">
          The Good Thing About Waking Up In Some Forgotten Place Is That I Only
          Need To Eat Shortcakes And Cars to Power Up
        </td>
        <td class="px-1"> /13 </td>
      </tr>
      <tr>
        <td class="px-1">
          I May Be A High Schooler, But In My Heart Of Hearts I Am A Dashing
          Princely Phantom Thief
        </td>
        <td class="px-1"> /5 </td>
      </tr>
      <tr>
        <td class="px-1">
          Clouds Streak Across A Bright Blue Sky As I Stride A Legendary New
          Path In My Heroic Life!
        </td>
        <td class="px-1"> /3 </td>
      </tr>
      <tr>
        <td class="px-1">
          Another Tale Among Many: Me And My Graceful Childhood Friends
        </td>
        <td class="px-1"> /17 </td>
      </tr>
    </table>
  </app-puzzle>`,
  imports: [PuzzleComponent],
})
export class PuzzleFourComponent {
  protected cannedHints = [
    "I Ate At An Omakase Restaurant Where Each Set Had A Different Number Of Courses But The Menu Items Weren't Food Or Light Novels?",
    'Counting Entries In a Series In A World Where Title Numbers then Wikipedia and Goodreads Lists Are The Source Of Truth, Series Without Them Have To Be Eyeballed Using Chronology',
    "OK no more of the silly title gimmick. To translate the last two hints: each line represents an entry in a series, with the number representing the total number of entries. For each clue, you'll want to find the entry number. There are explicit sources for films (try 'lists of film series' for a list of lists!) and books described above, but sources differ for video games. Use title numbers if available, but otherwise use the number given in its Wikipedia article, or calculate it using Wikipedia's definition of 'main game' in its article on the series",
    'For what reason? What is the charge? Eating a DESSERT (8)? A ENTREE (8) MAIN (8) DESSERT (8)?',
  ];
}
