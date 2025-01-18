import { Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
  {path:"**", component:Error404Component}
];
