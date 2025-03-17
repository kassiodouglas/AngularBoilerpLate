import { Routes } from '@angular/router';
import { devModeGuard } from './core/guards/dev-mode.guard';

export const routes: Routes = [

  // features endpoints
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./features/me/me.module').then(m => m.MeModule) },

  // default endpoints
  { canActivate:[devModeGuard],  path: '', loadChildren: () => import('./features/dev/dev.module').then(m => m.DevModule) },
  { path: '', loadChildren: () => import('./features/error/error.module').then(m => m.ErrorModule) }
];
