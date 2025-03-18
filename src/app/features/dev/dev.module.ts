import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TestFormularyComponent } from './pages/formulary/test-formulary.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { NotiflixComponent } from './pages/notiflix/notiflix.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './pages/modal/modal.component';
import { OffcanvasComponent } from './pages/offcanvas/offcanvas.component';
import { TablyComponent } from './pages/tably/tably.component';
import { TabsComponent } from './pages/tabs/tabs.component';


@NgModule({
  declarations: [
    TestFormularyComponent,
    ButtonsComponent,
    NotiflixComponent,
    ModalComponent,
    OffcanvasComponent,
    TablyComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    DevRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class DevModule { }
