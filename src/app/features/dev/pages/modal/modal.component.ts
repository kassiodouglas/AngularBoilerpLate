import { ModalService } from './../../../../shared/components/modal/services/modal.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'page-modal',
  standalone: false,

  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {


  constructor(public modalService:ModalService){}

  openModalDefault(dynamicModal: TemplateRef<any>){
    this.modalService.render(dynamicModal, true)
  }

  openModalCentered(dynamicModal: TemplateRef<any>){
    this.modalService.reset().centered().render(dynamicModal)
  }

  openModalStatic(dynamicModal: TemplateRef<any>){
    this.modalService.reset().back('static').render(dynamicModal)
  }

  openModalLarge(dynamicModal: TemplateRef<any>){
    this.modalService.reset().size('lg').render(dynamicModal)
  }

  openModalSmall(dynamicModal: TemplateRef<any>){
    this.modalService.reset().size('sm').render(dynamicModal)
  }

}
