import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';


@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    RouterModule
  ]
})
export class ErrorModule { }
