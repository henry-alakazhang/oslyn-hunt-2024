import { NgClass } from '@angular/common';
import { Component, inject, Input, OnChanges } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink, RouterLinkActive, NgClass],
  template: `
    <a
      class="block rounded p-1 w-full text-left hover:{{ hoverColor }} active:{{
        activeColor
      }} {{ size }} {{ router.url === path ? activeColor : '' }}"
      [routerLink]="path"
      [routerLinkActive]="'true'"
    >
      <ng-content></ng-content>
    </a>
  `,
})
export class ButtonComponent implements OnChanges {
  @Input({ required: true }) path: string;
  @Input() size: 'text-lg' | 'text-md' = 'text-lg';
  @Input() color: 'amber' | 'slate' = 'slate';

  activeColor: string;
  hoverColor: string;

  ngOnChanges() {
    this.activeColor = this.color === 'slate' ? 'bg-slate-300' : 'bg-amber-800';
    this.hoverColor = this.color === 'slate' ? 'bg-slate-200' : 'bg-amber-700';
  }

  router = inject(Router);
}
