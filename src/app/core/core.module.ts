import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './pages/error/error.component';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule, CoreRoutingModule
  ],
  declarations: [ErrorComponent],
  exports: [RouterModule]
})
export class CoreModule { }
