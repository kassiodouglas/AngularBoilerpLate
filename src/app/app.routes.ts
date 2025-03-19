import { Routes } from '@angular/router';
import { devModeGuard } from './core/guards/dev-mode.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },

  {path: "", component: LayoutComponent, children: [
    { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
    { path: 'minha-area', loadChildren: () => import('./features/me/me.module').then(m => m.MeModule) },

    { path: 'dev', canActivate: [devModeGuard], loadChildren: () => import('./features/dev/dev.module').then(m => m.DevModule) },

  ]},

  { path: 'erro', loadChildren: () => import('./features/error/error.module').then(m => m.ErrorModule) },

  // Captura todas as URLs inválidas e redireciona para erro 404
  { path: '**', redirectTo: 'erro/404' }
];
