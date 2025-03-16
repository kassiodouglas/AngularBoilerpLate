import { Routes } from '@angular/router';

export const routes: Routes = [

  // rota demonstrativa, se remover, remova o módulo em 'app/features/home'
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },

  { path: '', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./features/dev/dev.module').then(m => m.DevModule) },
  { path: '', loadChildren: () => import('./features/error/error.module').then(m => m.ErrorModule) }
];
