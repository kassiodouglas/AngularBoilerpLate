import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HowtouseComponent } from './pages/howtouse/howtouse.component';

export const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"como-usar", component:HowtouseComponent}
];
