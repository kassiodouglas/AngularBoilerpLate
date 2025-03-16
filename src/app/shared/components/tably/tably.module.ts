import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TablyComponent } from './components/tably/tably.component';
import { TablyRowComponent } from './components/tably-row/tably-row.component';
import { FormularyModule } from "../formulary/formulary.module";
import { ReactiveFormsModule } from '@angular/forms';
import { NgxVirtualScrollModule } from '@lithiumjs/ngx-virtual-scroll'; //
import { CnpjPipe } from '../../pipes/cnpj.pipe';
import { CpfPipe } from '../../pipes/cpf.pipe';

@NgModule({
  declarations: [
    TablyComponent,
    TablyRowComponent
  ],
  imports: [
    CommonModule,
    FormularyModule,
    ReactiveFormsModule,
    NgxVirtualScrollModule
  ],
  providers: [DatePipe, CnpjPipe, CpfPipe],
  exports: [
    TablyComponent
  ],
})
export class TablyModule { }
