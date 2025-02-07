import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './pages/error/error.component';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { TestFormularyComponent } from './pages/dev/formulary/test-formulary.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, CoreRoutingModule, SharedModule, ReactiveFormsModule
  ],
  declarations: [ErrorComponent, TestFormularyComponent],
  exports: [RouterModule]
})
export class CoreModule { }
