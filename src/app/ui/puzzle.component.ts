import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  template: `
    <div>
      <h2 class="text-xl underline">{{ titleName }}</h2>
      <p class="italic mb-4">{{ flavour }}</p>
      @if(extraHint) { <p class="italic text-sm mb-4">{{ extraHint }}</p> }
      <hr class="mb-4" />
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class PuzzleComponent {
  @Input() titleName: string;
  @Input() flavour: string;
  @Input() extraHint: string;
}
