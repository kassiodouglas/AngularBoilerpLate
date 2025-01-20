import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'erro/:errorCode', component: ErrorComponent },
  { path: '**', redirectTo: 'erro/404' }
];
