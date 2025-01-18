import { Error404Component } from './core/pages/error404/error404.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },

  { path: 'erro/404', component: Error404Component },
  { path: '**', redirectTo: 'erro/404', pathMatch: 'full' },
];
