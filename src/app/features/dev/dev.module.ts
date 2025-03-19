import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TestFormularyComponent } from './pages/formulary/test-formulary.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { NotiflixComponent } from './pages/notiflix/notiflix.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './pages/modal/modal.component';
import { PanelComponent } from './pages/panel/panel.component';
import { TablyComponent } from './pages/tably/tably.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TestFormularyComponent,
    ButtonsComponent,
    NotiflixComponent,
    ModalComponent,
    PanelComponent,
    TablyComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    DevRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class DevModule { }
