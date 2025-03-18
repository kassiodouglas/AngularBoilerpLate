import { Component, inject, TemplateRef, WritableSignal } from '@angular/core';
import { PanelService } from '../../../../shared/components/panel/services/panel.service';

@Component({
  selector: 'page-offcanvas',
  standalone: false,
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.scss'
})
export class OffcanvasComponent {

  classHeight = ''

  constructor(private panelService:PanelService){}

	openRight(content: TemplateRef<any>) {
    this.classHeight = 'max-h-[calc(100vh-120px)]';
		this.panelService.openRight(content).back('static');
	}

  openLeft(content: TemplateRef<any>) {
    this.classHeight = 'max-h-[calc(100vh-120px)]';
		this.panelService.openLeft(content);
	}

  openTop(content: TemplateRef<any>) {
    this.classHeight = 'max-h-[calc(100vh-120px)]';
		this.panelService.openTop(content);
	}

  openBottom(content: TemplateRef<any>) {
		this.panelService.openBottom(content);
	}

}
