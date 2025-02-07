import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarService } from './components/sidebar/sidebar.service';
import { SidebarLinkComponent } from './components/sidebar/sidebar-link/sidebar-link.component';
import { RouterModule } from '@angular/router';
import { FormularyModule } from './components/formulary/formulary.module';
import { InputyComponent } from './components/formulary/components/inputy/inputy.component';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';
import { SelectyComponent } from './components/formulary/components/selecty/selecty.component';
import { TextareayComponent } from './components/formulary/components/textareay/textareay.component';
import { FormularyService } from './components/formulary/services/formulary.service';
import { DatepickeryComponent } from './components/formulary/components/datepickery/datepickery.component';
import { SignaturyComponent } from './components/formulary/components/signatury/signatury.component';
import { SwitchyComponent } from './components/formulary/components/switchy/switchy.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, FormularyModule
  ],
  declarations: [SidebarComponent, SidebarLinkComponent, DarkModeButtonComponent],
  exports: [
    SidebarComponent, DarkModeButtonComponent, InputyComponent, SelectyComponent, TextareayComponent, DatepickeryComponent, SignaturyComponent, SwitchyComponent
  ],
  providers: [
    SidebarService, FormularyService
  ]
})
export class SharedModule { }
