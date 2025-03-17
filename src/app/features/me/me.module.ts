import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MeComponent } from './pages/me/me.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MeComponent,
  ],
  imports: [
    CommonModule,
    MeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MeModule { }
