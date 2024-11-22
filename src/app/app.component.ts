import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnswerService, PuzzleId } from './answer.service';
import { ButtonComponent } from './ui/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent],
  template: `
    <div class="font-sans h-screen ">
      <div class="xl:container h-screen mx-auto flex flex-col md:flex-row p-4">
        <div class="md:w-80 flex-shrink-0 p-4 border-r border-r-slate-300 space-y-2">
          <h1 class="text-3xl font-semibold">OSLYN Hunt 2024</h1>
          <div class="font-semibold border-b border-b-slate-300"></div>
          <app-button class="block" path="/">
            Introduction
          </app-button>
          <div class="font-semibold border-b border-b-slate-300"></div>
          <app-button class="block" path="/sekai">
            1 - Sekai @if (answerStatus[1]()) { ☆ }
          </app-button>
          <app-button class="block" path="/power-scaling">
            2 - Power Scaling @if (answerStatus[2]()) { ☆ }
          </app-button>
          @if (answerCount() >= 1) {
            <app-button class="block" path="/capsule-machine">
              3 - Capsule Machine @if (answerStatus[3]()) { ☆ }
            </app-button>
          }
          @if (answerCount() >= 2) {
            <app-button class="block" path="/entries-mains-deserts">
              4 - Entries, Mains, Desserts @if (answerStatus[4]()) { ☆ }
            </app-button>
          }
          @if (answerCount() >= 3) {
            <app-button class="block" path="/parallel-universes">
              5 - Parallel Universes @if (answerStatus[5]()) { ☆ }
            </app-button>
          }
          @if (answerCount() >= 4) {
            <app-button class="block" path="/first-name-basis">
              6 - First Name Basis @if (answerStatus[6]()) { ☆ }
            </app-button>
          }
          @if (answerCount() >= 5) {
            <app-button class="block" path="/hunters-and-gatherers">
              M - Hunters and Gatherers @if (answerStatus["m"]()) { ☆ }
            </app-button>
          }
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

  protected answerService = inject(AnswerService);
  protected answerStatus = this.answerService.answerStatus;
  protected answerCount = computed(
    // filter answer status for all correctly answered puzzles
    () => (Object.keys(this.answerService.answerStatus) as PuzzleId[]).filter((p => this.answerStatus[p]())).length
  )
}
