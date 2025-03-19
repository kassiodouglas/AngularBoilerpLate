import { Component, inject, TemplateRef, WritableSignal } from '@angular/core';
import { PanelService } from '../../../../shared/components/panel/services/panel.service';

@Component({
  selector: 'page-panel',
  standalone: false,
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {

  constructor(private panelService:PanelService){}

	openRight(content: TemplateRef<any>) {
		this.panelService.position('end').back().size('xs').render(content);
	}

  openLeft(content: TemplateRef<any>) {
		this.panelService.position('start').back().size().render(content);
	}

  openTop(content: TemplateRef<any>) {
		this.panelService.position('top').back().size('sm').render(content);
	}

  openBottom(content: TemplateRef<any>) {
		this.panelService.position('bottom').back().size('lg').render(content);
	}

  openDefault(content: TemplateRef<any>) {
		this.panelService.render(content, true);
	}

}
