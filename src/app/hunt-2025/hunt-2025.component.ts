import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AnswerService } from '../answer.service';
import { ButtonComponent } from '../ui/button.component';

@Component({
  selector: 'app-hunt-2025',
  imports: [RouterOutlet, ButtonComponent, RouterLink],
  template: ` <div class="font-sans h-screen ">
    <div class="xl:container h-screen mx-auto flex flex-col md:flex-row p-4">
      <div
        class="md:w-80 flex-shrink-0 p-4 border-r border-r-slate-300 space-y-2"
      >
        <h1 class="text-3xl font-semibold">
          <a [routerLink]="'/'">‹</a>
          OSLYN Hunt 2025
        </h1>
        <div class="font-semibold border-b border-b-slate-300"></div>
        <app-button class="block" path="/2025"> Introduction </app-button>
        <app-button class="block" path="/2025/notions-of-thieves">
          Meta: Notions of Thieves
        </app-button>
        <div class="font-semibold border-b border-b-slate-300"></div>
        <p class="text-lg"> Easy </p>
        <app-button class="block" size="text-md" path="/2025/of-a-feather">
          Of a Feather
        </app-button>
        <app-button class="block" size="text-md" path="/2025/take-your-time">
          Take Your Time
        </app-button>
        <div class="font-semibold border-b border-b-slate-300"></div>
        <p class="text-lg"> Medium </p>
        <app-button
          class="block"
          size="text-md"
          path="/2025/answer-pronounced-answer"
        >
          Answer (Pronounced Answer)
        </app-button>
        <app-button class="block" size="text-md" path="/2025/colours-picked">
          Colours Picked
        </app-button>
        <app-button class="block" size="text-md" path="/2025/national-righters">
          National Righters
        </app-button>
        <div class="font-semibold border-b border-b-slate-300"></div>
        <p class="text-lg"> Hard </p>
        <app-button class="block" size="text-md" path="/2025/flags-to-riches">
          Flags to Riches
        </app-button>
        <app-button class="block" size="text-md" path="/2025/from-genesis">
          From Genesis
        </app-button>
        <app-button
          class="block"
          size="text-md"
          path="/2025/each-shapen-sister-her-domain"
        >
          Each Shapen Sister Her Domain
        </app-button>
      </div>
      <div class="w-full p-16 overflow-y-auto">
        <router-outlet />
      </div>
    </div>
  </div>`,
})
export class Hunt2025Component {
  protected answerService = inject(AnswerService);
  protected answerStatus = this.answerService.answerStatus;
}
