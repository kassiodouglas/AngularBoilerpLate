import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './pages/error/error.component';
import { RouterModule } from '@angular/router';
import { routes } from './core.routes';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [ErrorComponent],
  exports: [RouterModule]
})
export class CoreModule { }
