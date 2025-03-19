import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFormularyComponent } from './pages/formulary/test-formulary.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { NotiflixComponent } from './pages/notiflix/notiflix.component';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { ModalComponent } from './pages/modal/modal.component';
import { PanelComponent } from './pages/panel/panel.component';
import { TablyComponent } from './pages/tably/tably.component';
import { TabsComponent } from './pages/tabs/tabs.component';

const routes: Routes = [
  { path: '', redirectTo: 'module/formulary', pathMatch: 'full' },

  { path: 'module/formulary', component: TestFormularyComponent },
  { path: 'module/notiflix', component: NotiflixComponent },
  { path: 'module/tably', component: TablyComponent },
  { path: 'module/panel', component: PanelComponent },

  { path: 'buttons', component: ButtonsComponent },
  { path: 'modals', component: ModalComponent },
  { path: 'tabs', component: TabsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
