import { Injectable, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalRef?: NgbModalRef;

  valueSize: 'sm' | 'lg' |  'xl' | 'full' | '' = '';
  backdrop: true | false | 'static' = true;
  posCentered = false;

  constructor(private ngbModal: NgbModal) {}

  reset(): ModalService{
    this.valueSize = '';
    this.backdrop = true;
    this.posCentered = false;
    return this;
  }

  centered(): ModalService {
    this.posCentered = true;
    return this;
  }

  back(value: true | false | 'static' = true): ModalService {
    this.backdrop = value
    return this;
  }

  size(size: 'sm' | 'lg' |  'xl' | 'full' | '' = ''): ModalService {
    this.valueSize = size;
    return this;
  }

  render(content: any, reset = false): NgbModalRef {

    let options:any = {};

    if(reset) this.reset();

    if(this.valueSize != 'full') options.size = this.valueSize;
    else if(this.valueSize == 'full') options.fullscreen = true;
    else{
      delete options.size;
      delete options.fullscreen;
    }

    if(this.posCentered) options.centered = this.posCentered;
    else delete options.centered;

    if(this.backdrop) options.backdrop = this.backdrop;

    this.modalRef = this.ngbModal.open(content, options);
    return this.modalRef;
  }

  close(): void{
    if (this.modalRef) {
      this.modalRef.close();
      this.modalRef = undefined;
    }
  }

}
