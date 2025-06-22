import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AnswerService } from '../answer.service';
import { ButtonComponent } from '../ui/button.component';

@Component({
  selector: 'app-hunt-2024',
  imports: [RouterOutlet, ButtonComponent, RouterLink],
  template: `
    <div class="font-sans h-screen ">
      <div class="xl:container h-screen mx-auto flex flex-col md:flex-row p-4">
        <div
          class="md:w-80 flex-shrink-0 p-4 border-r border-r-slate-300 space-y-2"
        >
          <h1 class="text-3xl font-semibold">
            <a [routerLink]="'/'">‹</a>
            OSLYN Hunt 2024
          </h1>
          <div class="font-semibold border-b border-b-slate-300"></div>
          <app-button class="block" path="/2024"> Introduction </app-button>
          <div class="font-semibold border-b border-b-slate-300"></div>
          <app-button class="block" path="/2024/sekai">
            1 - Sekai @if (answerStatus['2024-1']()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/power-scaling">
            2 - Power Scaling @if (answerStatus['2024-2']()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/capsule-machine">
            3 - Capsule Machine @if (answerStatus['2024-3']()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/entries-mains-deserts">
            4 - Entries, Mains, Desserts @if (answerStatus['2024-4']()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/parallel-universes">
            5 - Parallel Universes @if (answerStatus['2024-5']()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/first-name-basis">
            6 - First Name Basis @if (answerStatus['2024-6']()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/hunters-and-gatherers">
            M - Hunters and Gatherers @if (answerStatus['2024-m']()) { ☆ }
          </app-button>
        </div>
        <div
          class="w-full p-4 md:p-12 flex-shrink-0 md:flex-shrink md:overflow-y-auto"
        >
          <router-outlet />
        </div>
      </div>
    </div>
  `,
})
export class Hunt2024Component {
  protected answerService = inject(AnswerService);
  protected answerStatus = this.answerService.answerStatus;
}
