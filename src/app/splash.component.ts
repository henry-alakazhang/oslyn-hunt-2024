import { Component } from '@angular/core';
import { ButtonComponent } from './ui/button.component';

@Component({
  selector: 'app-splash',
  imports: [ButtonComponent],
  template: `
    <div class="h-full w-full flex items-center justify-center">
      <div class="w-max h-1/4 border flex flex-col items-center justify-center">
        <h1 class="font-bold text-4xl"> OSYLN Puzzle Hunt </h1>
        <div class="w-full flex flex-row justify-evenly">
          <app-button [path]="'2024'"> 2024 </app-button>
          <app-button [path]="'2025'" disabled> 2025 (coming soon) </app-button>
        </div>
      </div>
    </div>
  `,
})
export class SplashComponent {}
