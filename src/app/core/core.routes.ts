import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  { path: 'erro/:errorCode', component: ErrorComponent },
  { path: '**', redirectTo: 'erro/404' }
];
