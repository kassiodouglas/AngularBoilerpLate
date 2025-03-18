import { PanelService } from './../../services/panel.service';
import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'panel',
  standalone: false,
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {

  constructor(
    public ngbOffcanvas:NgbOffcanvas,
    public panelService:PanelService
  ){}

}
