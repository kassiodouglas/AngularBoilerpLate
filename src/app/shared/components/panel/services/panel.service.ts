import { Injectable, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  classHeight = 'max-h-[calc(100vh-120px)]';
  classPanel = '!w-1/3';
  classPosition: 'start' | 'end' | 'top' | 'bottom' = 'start';
  backdrop: true | false | 'static' = true;

  constructor(private ngbOffcanvasService: NgbOffcanvas) { }

  reset(){
    this.classHeight = 'max-h-[calc(100vh-120px)]';
    this.classPanel = '!w-1/3';
    this.classPosition = 'start';
    this.backdrop = true;
  }

  position(position: 'start' | 'end' | 'top' | 'bottom' = 'start'): PanelService {
    this.classPosition = position;
    return this;
  }

  back(value: true | false | 'static' = true): PanelService {
    this.backdrop = value
    return this;
  }

  size(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | '' = ''): PanelService {
    switch (size) {
      case 'xs':
        if (this.classPosition.includes('start') || this.classPosition.includes('end')) {
          this.classPanel = '!w-1/6';
          this.classHeight = 'max-h-[calc(100vh-120px)]';
        } else {
          this.classHeight = 'max-h-[calc(100vh-520px)]';
          this.classPanel = '!h-1/3';
        }
        break;

      case 'sm':
        if (this.classPosition.includes('start') || this.classPosition.includes('end')) {
          this.classPanel = '!w-1/4';
          this.classHeight = 'max-h-[calc(100vh-120px)]';
        } else {
          this.classHeight = 'max-h-[calc(100vh-520px)]';
          this.classPanel = '!h-1/3';
        }
        break;

      case 'md':
        if (this.classPosition.includes('start') || this.classPosition.includes('end')) {
          this.classPanel = '!w-1/3';
          this.classHeight = 'max-h-[calc(100vh-120px)]';
        } else {
          this.classHeight = 'max-h-[calc(100vh-520px)]';
          this.classPanel = '!h-1/3';
        }
        break;

      case 'lg':
        if (this.classPosition.includes('start') || this.classPosition.includes('end')) {
          this.classPanel = '!w-1/2';
          this.classHeight = 'max-h-[calc(100vh-120px)]';
        } else {
          this.classHeight = 'max-h-[calc(100vh-420px)]';
          this.classPanel = '!h-1/2';
        }
        break;

      case 'xl':
        if (this.classPosition.includes('start') || this.classPosition.includes('end')) {
          this.classPanel = '!w-2/3';
          this.classHeight = 'max-h-[calc(100vh-120px)]';
        } else {
          this.classHeight = 'max-h-[calc(100vh-320px)]';
          this.classPanel = '!h-2/3';
        }
        break;

      case 'full':
        if (this.classPosition.includes('start') || this.classPosition.includes('end')) {
          this.classPanel = '!w-full';
          this.classHeight = 'max-h-[calc(100vh-120px)]';
        } else {
          this.classHeight = 'max-h-[calc(100vh-120px)]';
          this.classPanel = '!h-full';
        }
        break;

      default:
        if (this.classPosition.includes('start') || this.classPosition.includes('end')) {
          this.classPanel = '!w-1/3';
          this.classHeight = 'max-h-[calc(100vh-120px)]';
        } else {
          this.classHeight = 'max-h-[calc(100vh-520px)]';
          this.classPanel = '!h-1/3';
        }
        break;
    }

    return this;
  }

  render(content: TemplateRef<any>, reset = false): void {

    if(reset) this.reset()

    this.ngbOffcanvasService.open(
      content,
      {
        position: this.classPosition,
        panelClass: this.classPanel,
        backdrop: this.backdrop
      }
    );
  }

}
