import { Component } from '@angular/core';
import { PuzzleComponent } from '../../ui/puzzle.component';

@Component({
  template: `
    <app-puzzle
      puzzleId="2"
      titleName="Power Scaling"
      flavour="When you arrive at the airport, an attendant hands you a piece of paper and says it's a list of flights.
        It looks more like fights to you, but even that doesn't seem quite right...
        Maybe if you could extract something from this, you'd be able to figure out which gate you're supposed to board at."
      extraHint="(the answer is two words)"
    >
      <div
        class="p-2 space-y-1"
        style="font: 10pt Verdana, sans-serif; font-weight:bold; background-color: rgb(241, 244, 249); border: 1px solid rgb(170, 170, 170)"
      >
        <p>
          20+ SpA 24 IVs Tera Fire Charizard-Mega-X Blast Burn vs. 8 HP / 72 SpD
          Greninja-Ash on a critical hit: 92.6 - 109% -- chance to OHKO
        </p>
        <p>
          112+ SpA 29 IVs Choice Specs Beads of Ruin Chi-Yu Flamethrower vs. 28
          HP / 16 SpD Flutter Mane in Sun: 133.7 - 157.3% -- guaranteed OHKO
        </p>
        <p>
          16 Atk 14 IVs Rayquaza-Mega Dragon Claw vs. 144 HP / 28+ Def Paralyzed
          Deoxys-Defense through Reflect: 15.1 - 17.7%-- possible 6HKO
        </p>
        <p>
          20 SpA 17 IVs Pikachu Thunderbolt vs. 28 HP / 40 SpD Team Rocket: 12.1
          - 14.4% -- possible 7HKO
        </p>
        <p>
          80 Atk 22 IVs Omnidirectional Gear Ceruledge Bitter Blade vs. 68 HP /
          32 Def Gigantamax Conkeldurr: 23 - 27.3% -- possible 4HKO
        </p>
        <p>
          4 Atk 33 IVs Tera Electric Gallade-Zen Thunderclap Flash vs. 80 HP /
          28 Def Paralyze Point Spinarak: 16.7 - 19.9% -- guaranteed 6HKO
        </p>
        <p>
          4 Atk 15 IVs Dramon Killer Armarouge Corkscrew Crash vs. 96 HP / 52
          Def Tera Metal Seadra in Tailwind: 115 - 133.8% -- guaranteed OHKO
        </p>
        <p>
          48 SpA 16 IVs Infernape-Mega-3 Spirit Bomb vs. 48 HP / 40 SpD
          Oblivious Musharna: 77.3 - 91.1% -- guaranteed 2HKO
        </p>
        <p>
          52 Atk 28 IVs Gigantamax Excadrill G-Max Drill Break vs. 52 HP / 24
          Def Gigantamax Escavalier: 17.9 - 21.1% -- possible 5HKO
        </p>
        <p>
          28 Atk 26 IVs Cinderace Super Homo Triple Spin Serve vs. 60 HP / 28
          Def Defiant Passimian: 55.8 - 65.3% - guaranteed 2HKO
        </p>
        <p>
          48 SpA 1 IV DIAlga-World Freezing Glare vs. 88 HP / 20 SpD Star Plate
          Urshifu-Rapid-Strike: 40.9 - 48.3% -- guaranteed 3HKO
        </p>
        <p>
          76 SpA 4 IVs Purple Orb Meowstic-Male Hollow Technique vs. 92 HP / 36
          SpD Trevenant in Expanded Domain: 175.4 - 206.7% -- guaranteed OHKO
        </p>
        <p>
          20 Atk 3 IVs Palafin-Hero United States of Smash vs. 56 HP / 4 Def
          Tera Dark Zoroark: 31.8 - 37.3% -- 89.4% chance to 3HKO
        </p>
        <p>
          136 SpA 20 IVs Star Piece Diancie-Mega Healing Escalation vs. 12 HP /
          20 SpD Malachite Lucario: 26.6 - 31.3% -- guaranteed 4HKO
        </p>
        <p>
          24 Atk 12 IVs Hoopa-Forbidden Hyperspace Obliteration vs. 24 HP / 12
          Def Three Separate Reshiram: 153% - 180%-- guaranteed OHKO
        </p>
      </div>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class PuzzleTwoComponent {}
