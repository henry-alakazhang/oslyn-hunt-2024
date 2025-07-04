import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AnswerService } from '../answer.service';
import { ButtonComponent } from '../ui/button.component';

@Component({
  selector: 'app-hunt-2025',
  imports: [RouterOutlet, ButtonComponent, RouterLink],
  template: ` <div class="font-sans h-screen bg-yellow-950 text-amber-50">
    <div class="xl:container h-screen mx-auto flex flex-col md:flex-row p-4">
      <div
        class="md:w-80 flex-shrink-0 p-4 border-r border-r-amber-100 space-y-2"
      >
        <h1 class="text-3xl font-semibold">
          <a [routerLink]="'/'">‹</a>
          OSLYN Hunt 2025
        </h1>
        <div class="font-semibold border-b border-b-amber-100"></div>
        <app-button class="block" color="amber" path="/2025">
          Introduction
        </app-button>
        <app-button class="block" color="amber" path="/2025/notions-of-thieves">
          Meta: Notions of Thieves @if (answerStatus['2025-meta']()) { ☆ }
        </app-button>
        <div class="font-semibold border-b border-b-amber-100"></div>
        <p class="text-lg"> Easy </p>
        <app-button
          class="block"
          size="text-md"
          color="amber"
          path="/2025/of-a-feather"
        >
          Of a Feather @if (answerStatus['2025-e1']()) { ☆ }
        </app-button>
        <app-button
          class="block"
          size="text-md"
          color="amber"
          path="/2025/take-your-time"
        >
          Take Your Time @if (answerStatus['2025-e2']()) { ☆ }
        </app-button>
        <div class="font-semibold border-b border-b-amber-100"></div>
        <p class="text-lg"> Medium </p>
        <app-button
          class="block"
          size="text-md"
          color="amber"
          path="/2025/answer-pronounced-answer"
        >
          Answer (Pronounced 'Answer') @if (answerStatus['2025-m1']()) { ☆ }
        </app-button>
        <app-button
          class="block"
          size="text-md"
          color="amber"
          path="/2025/colours-picked"
        >
          Colours Picked @if (answerStatus['2025-m2']()) { ☆ }
        </app-button>
        <app-button
          class="block"
          size="text-md"
          color="amber"
          path="/2025/national-righters"
        >
          National Righters @if (answerStatus['2025-m3']()) { ☆ }
        </app-button>
        <div class="font-semibold border-b border-b-amber-100"></div>
        <p class="text-lg"> Hard </p>
        <app-button
          class="block"
          size="text-md"
          color="amber"
          path="/2025/each-shapen-sister"
        >
          Each Shapen Sister Her Domain @if (answerStatus['2025-h1']()) { ☆ }
        </app-button>
        <app-button
          class="block"
          size="text-md"
          color="amber"
          path="/2025/flags-to-riches"
        >
          Flags to Riches @if (answerStatus['2025-h2']()) { ☆ }
        </app-button>
        <app-button
          class="block"
          size="text-md"
          color="amber"
          path="/2025/from-genesis"
        >
          From Genesis @if (answerStatus['2025-h3']()) { ☆ }
        </app-button>
      </div>
      <!-- mobile: content is full height and page-scrollable. navbar scrollable above. -->
      <!-- desktop: content is capped height and internally scrollable. navbar static on left -->
      <div
        class="w-full p-4 md:p-12 flex-shrink-0 md:flex-shrink md:overflow-y-auto"
      >
        <router-outlet />
      </div>
    </div>
  </div>`,
})
export class Hunt2025Component {
  protected answerService = inject(AnswerService);
  protected answerStatus = this.answerService.answerStatus;
}
