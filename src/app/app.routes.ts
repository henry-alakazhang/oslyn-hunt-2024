import { Route } from '@angular/router';
import { Hunt2024Component } from './hunt-2024/hunt-2024.component';
import { routes2024 } from './hunt-2024/hunt-2024.routes';
import { Hunt2025Component } from './hunt-2025/hunt-2025.component';
import { routes2025 } from './hunt-2025/hunt-2025.routes';
import { SplashComponent } from './splash.component';

export const routes: Route[] = [
  {
    path: '',
    component: SplashComponent,
  },
  {
    path: '2024',
    component: Hunt2024Component,
    children: routes2024,
  },
  {
    path: '2025',
    component: Hunt2025Component,
    children: routes2025,
  },
];
