import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFormularyComponent } from './pages/formulary/test-formulary.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { NotiflixComponent } from './pages/notiflix/notiflix.component';
import { environment } from '../../../environments/environment';

const routes: Routes = [
  { path: 'dev/module/formulary', component: TestFormularyComponent },
  { path: 'dev/module/notiflix', component: NotiflixComponent },
  { path: 'dev/buttons', component: ButtonsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
