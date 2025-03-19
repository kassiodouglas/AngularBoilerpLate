import { ModalService } from './../../services/modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  constructor(
    public ngbActiveModal:NgbActiveModal,
    public modalService:ModalService,
  ){}

}
