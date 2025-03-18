import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { BreadcumbComponent } from './components/breadcumb/breadcumb.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { TablyModule } from './components/tably/tably.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutSidebarLinkComponent } from './components/layout/sidebar-link/sidebar-link.component';
import { PanelModule } from './components/panel/panel.module';
import { PanelService } from './components/panel/services/panel.service';
import { PanelComponent } from './components/panel/components/panel/panel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormularyModule,
    TablyModule,
    PanelModule
  ],
  declarations: [
    LayoutSidebarLinkComponent,
    DarkModeButtonComponent,
    BreadcumbComponent,
    PageTitleComponent,
    LayoutComponent,
  ],
  exports: [
    DarkModeButtonComponent,
    InputyComponent,
    SelectyComponent,
    TextareayComponent,
    DatepickeryComponent,
    SignaturyComponent,
    SwitchyComponent,
    BreadcumbComponent,
    PageTitleComponent,
    PanelComponent
  ],
  providers: [
    FormularyService,
    PanelService
  ]
})
export class SharedModule { }
