import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a
      class="block rounded p-1 w-full text-left text-lg hover:bg-slate-100"
      [routerLink]="path"
      [routerLinkActive]="'true'"
    >
      <ng-content></ng-content>
    </a>
  `,
})
export class ButtonComponent {
  @Input({ required: true }) path: string;
}
