import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TestFormularyComponent } from './pages/formulary/test-formulary.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { NotiflixComponent } from './pages/notiflix/notiflix.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TestFormularyComponent,
    ButtonsComponent,
    NotiflixComponent
  ],
  imports: [
    CommonModule,
    DevRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DevModule { }
