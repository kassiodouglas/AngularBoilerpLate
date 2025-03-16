import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
    { path: 'erro/:errorCode', component: ErrorComponent },
    { path: '**', redirectTo: 'erro/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
