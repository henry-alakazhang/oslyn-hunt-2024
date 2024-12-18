import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a
      class="block rounded p-1 w-full text-left text-lg hover:bg-slate-200 active:bg-slate-300"
      [class.bg-slate-200]="router.url === path"
      [routerLink]="path"
      [routerLinkActive]="'true'"
    >
      <ng-content></ng-content>
    </a>
  `,
})
export class ButtonComponent {
  @Input({ required: true }) path: string;

  router = inject(Router);
}
