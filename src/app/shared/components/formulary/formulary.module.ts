import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputyComponent } from './components/inputy/inputy.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectyComponent } from './components/selecty/selecty.component';
import { TextareayComponent } from './components/textareay/textareay.component';
import { FormularyService } from './services/formulary.service';
import { ValidationComponent } from './components/validation/validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickeryComponent } from './components/datepickery/datepickery.component';
import { DebugyComponent } from './components/debugy/debugy.component';
import { SignaturyComponent } from './components/signatury/signatury.component';
import { SwitchyComponent } from './components/switchy/switchy.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    InputyComponent,
    SelectyComponent,
    TextareayComponent,
    DatepickeryComponent,
    ValidationComponent,
    DebugyComponent,
    SignaturyComponent,
    SwitchyComponent,

  ],
  imports: [CommonModule, NgbTooltipModule, FormsModule, NgxMaskDirective,
    NgxMaskPipe],
  providers: [FormularyService, provideNgxMask()],
  exports: [
    InputyComponent,
    SelectyComponent,
    TextareayComponent,
    DatepickeryComponent,
    SignaturyComponent,
    SwitchyComponent,
  ],
})
export class FormularyModule { }
