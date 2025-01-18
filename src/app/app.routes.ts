import { Routes } from '@angular/router';

export const routes: Routes = [

  // rota demonstrativa, se remover, remova o componente em 'app/features/home'
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },

  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }
];
