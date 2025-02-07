import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { TestFormularyComponent } from './pages/dev/formulary/test-formulary.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dev/module/formulary', component: TestFormularyComponent },
  { path: 'erro/:errorCode', component: ErrorComponent },
  { path: '**', redirectTo: 'erro/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
