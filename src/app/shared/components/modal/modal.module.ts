import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './services/modal.service';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule, NgbModule
  ],
  exports:[
    ModalComponent
  ]
  ,providers:[
    NgbActiveModal, ModalService
  ]
})
export class ModalModule { }
