import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFormularyComponent } from './pages/formulary/test-formulary.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { NotiflixComponent } from './pages/notiflix/notiflix.component';
import { environment } from '../../../environments/environment';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { ModalComponent } from './pages/modal/modal.component';
import { OffcanvasComponent } from './pages/offcanvas/offcanvas.component';
import { TablyComponent } from './pages/tably/tably.component';
import { TabsComponent } from './pages/tabs/tabs.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      { path: 'dev/module/formulary', component: TestFormularyComponent },
      { path: 'dev/module/notiflix', component: NotiflixComponent },
      { path: 'dev/module/tably', component: TablyComponent },
      { path: 'dev/buttons', component: ButtonsComponent },
      { path: 'dev/modals', component: ModalComponent },
      { path: 'dev/offcanvas', component: OffcanvasComponent },
      { path: 'dev/tabs', component: TabsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
