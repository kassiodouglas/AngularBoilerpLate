import { Injectable } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  classHeight = '';
  classPanel = '';
  position = '';
  backdrop:boolean|string = '';

  constructor(private ngbOffcanvasService:NgbOffcanvas) { }

  private open(content:any, options:any ){
    this.ngbOffcanvasService.open(content, options);
  }

  openRight(content:any){
    this.classHeight = 'max-h-[calc(100vh-120px)]';
    this.classPanel = '!w-1/3';
    this.position = 'end';

    this.open(
      content,
      { position: this.position, panelClass:this.classPanel }
    );

    return this;
  }

  back(value:boolean|string = true): this{
    this.backdrop = value
    return this;
  }





  openLeft(content:any){
    this.classHeight = 'max-h-[calc(100vh-120px)]';
    this.classPanel = '!w-1/3';
    this.position = 'start';

    this.open(
      content,
      { position: this.position, panelClass:this.classPanel }
    );
  }

  openTop(content:any){
    this.classHeight = 'max-h-[calc(100vh-520px)]';
    this.classPanel = '!h-1/3';
    this.position = 'top';

    this.open(
      content,
      { position: this.position, panelClass:this.classPanel }
    );
  }

  openBottom(content:any){
    this.classHeight = 'max-h-[calc(100vh-520px)]';
    this.classPanel = '!h-1/3';
    this.position = 'bottom';


    this.open(
      content,
      { position: this.position, panelClass:this.classPanel }
    );
  }

}
