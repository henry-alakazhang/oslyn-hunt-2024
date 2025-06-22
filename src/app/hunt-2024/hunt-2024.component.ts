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
            1 - Sekai @if (answerStatus[1]()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/power-scaling">
            2 - Power Scaling @if (answerStatus[2]()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/capsule-machine">
            3 - Capsule Machine @if (answerStatus[3]()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/entries-mains-deserts">
            4 - Entries, Mains, Desserts @if (answerStatus[4]()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/parallel-universes">
            5 - Parallel Universes @if (answerStatus[5]()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/first-name-basis">
            6 - First Name Basis @if (answerStatus[6]()) { ☆ }
          </app-button>
          <app-button class="block" path="/2024/hunters-and-gatherers">
            M - Hunters and Gatherers @if (answerStatus["m"]()) { ☆ }
          </app-button>
        </div>
        <div class="w-full p-16 overflow-y-auto">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
})
export class Hunt2024Component {
  title = 'oslyn-hunt-2024';

  protected answerService = inject(AnswerService);
  protected answerStatus = this.answerService.answerStatus;
}
