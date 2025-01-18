import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './pages/error404/error404.component';
import { RouterModule } from '@angular/router';
import { routes } from './core.routes';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [Error404Component],
  exports: [RouterModule]
})
export class CoreModule { }
