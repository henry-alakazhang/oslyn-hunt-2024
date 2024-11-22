import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './ui/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent],
  template: `
    <div class="font-sans h-screen ">
      <div class="container mx-auto flex flex-row h-screen p-4">
        <div class="w-80 flex-shrink-0 p-4 border-r border-r-slate-300 space-y-2">
          <h1 class="text-3xl font-semibold">OSLYN Hunt 2024</h1>
          <div class="font-semibold border-b border-b-slate-300"></div>
          <app-button class="block" path="/">
            Introduction
          </app-button>
          <div class="font-semibold border-b border-b-slate-300"></div>
          <app-button class="block" path="/sekai">
            1 - Sekai
          </app-button>
          <app-button class="block" path="/power-scaling">
            2 - Power Scaling
          </app-button>
          <app-button class="block" path="/capsule-machine">
            3 - Capsule Machine
          </app-button>
          <app-button class="block" path="/entries-mains-deserts">
            4 - Entries, Mains, Desserts
          </app-button>
          <app-button class="block" path="/parallel-universes">
            5 - Parallel Universes
          </app-button>
          <app-button class="block" path="/first-name-basis">
            6 - First Name Basis
          </app-button>
          <app-button class="block" path="/hunters-and-gatherers">
            M - Hunters and Gatherers
          </app-button>
        </div>
        <div class="w-full p-16 overflow-y-auto">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'oslyn-hunt-2024';
}
