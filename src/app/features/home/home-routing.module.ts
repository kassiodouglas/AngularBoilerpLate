import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HowtouseComponent } from './pages/howtouse/howtouse.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

const routes: Routes = [
  {
    path:"", component:LayoutComponent, children:[
      {path:"", component:HomeComponent},
      {path:"como-usar", component:HowtouseComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
