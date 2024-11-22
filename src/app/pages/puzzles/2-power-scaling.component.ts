import { Component } from '@angular/core';
import { PuzzleComponent } from '../../ui/puzzle.component';

@Component({
  template: `
    <app-puzzle
      titleName="Power Scaling"
      flavour="When you arrive at the airport for your trip, all the lights are off - apparently they've had a blackout. One of the attendants hands you a piece of paper and says it's a list of flights. So... which gate are you supposed to board at?"
      extraHint="(6 3)"
    >
      <div
        class="p-2 space-y-1"
        style="font: 10pt Verdana, sans-serif; font-weight:bold; background-color: rgb(241, 244, 249); border: 1px solid rgb(170, 170, 170)"
      >
        <p>
          20+ SpA 24 IVs Tera Fire Charizard-Mega-X Blast Burn vs. 8 HP / 72 SpD
          Greninja-Ash on a critical hit: 266-313 (92.6 - 109%) -- 56.3% chance
          to OHKO
        </p>
        <p>
          112+ SpA 29 IVs Choice Specs Beads of Ruin Chi-Yu Flamethrower vs. 28
          HP / 16 SpD Flutter Mane in Sun: 345-406 (133.7 - 157.3%) --
          guaranteed OHKO
        </p>
        <p>
          16 Atk 14 IVs Rayquaza-Mega Dragon Ascent vs. 72 HP / 28 Def Paralyzed
          DeoxysAttack: 111-132 (15.1 - 17.76%) -- possible 6HKO
        </p>
        <p>
          Lv 5 68 SpA Pikachu Thunderbolt vs. 28 HP / 40 SpD Team Rocket: 79-94
          (12.1 - 14.4%) -- possible 7HKO
        </p>
        <p>
          48 Atk 26 IVs Assault Gear Ceruledge Bitter Blade vs. 68 HP / 32 Def
          Gigantamax Conkeldurr: 81-96 (23 - 27.3%) -- approx. 46.6% chance to
          4HKO
        </p>
        <p>
          +1 132 Atk Tera Electric Gallade-Zen Thunderclap vs. 80 HP / 28 Def
          Paralyze Point Spinarak: 44-53 (16.7 - 19.9%) -- guaranteed 6HKO
        </p>
        <p>
          +1 60 Atk Dramon Killer Armarouge Corkscrew Crash vs. 96 HP / 52 Def
          Tera Metal Seadra in Tailwind: 380-446 (115 - 133.8%) -- guaranteed
          OHKO
        </p>
        <p>
          48 SpA 20 IVs Infernape-Mega-3 Aura Sphere vs. 48 HP / 40 SpD
          Oblivious Musharna: 504-594 (77.3 - 91.1%) -- guaranteed 2HKO
        </p>
        <p>
          52 Atk 28 IVs Gigantamax Excadrill G-Max Drill Run vs. 52 HP / 24 Def
          Gigantamax Escavalier: 117-138 (17.9 - 21.1%) -- possible 5HKO
        </p>
        <p>
          28 Atk 26 IVs Cinderace Super Homo Triple Spin Serve vs. 60 HP / 28
          Def Defiant Passimian: 89-104 (55.8 - 65.3%) - guaranteed 2HKO
        </p>
        <p>
          28 SpA 1 IV DIAlga Freezing Glare vs. 88 HP / 20 SpD Star Plate
          Urshifu-Rapid-Strike: 115-136 (40.9 - 48.3%) -- guaranteed 3HKO
        </p>
        <p>
          84 SpA 20 IVs Purple Orb Meowstic Expanding Force vs. 88 HP / 36 SpD
          Trevenant in Psychic Domain: 672-792 (175.4 - 206.7%) -- guaranteed
          OHKO
        </p>
        <p>
          +5 12 Atk Palafin-Hero Searing Sunraze Smash vs. 56 HP / 4 Def Tera
          Dark Zoroark: 232-272 (31.8 - 37.3%) -- 89.4% chance to 3HKO
        </p>
        <p>
          116 SpA 20 IVs Star Piece Diancie-Mega Moonblast vs. 12 HP / 20 SpD
          Malachite Lucario: 91-107 (26.6 - 31.3%) -- guaranteed 4HKO
        </p>
        <p>
          28 Atk 12 IVs Hoopla-Forbidden Hyperspace Hole vs. 36 HP / 16 Def
          Triple Reshiram: 13770-16200 (153% - 180%) -- guaranteed OHKO
        </p>
      </div>
    </app-puzzle>
  `,
  imports: [PuzzleComponent],
})
export class PuzzleTwoComponent {}
