import { DarkModeService } from './../../services/dark-mode.service';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'shared-sidebar',
  standalone:false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  activeOffcanvas = inject(NgbActiveOffcanvas);
	@Input() name!: string;

  open = false;

  constructor(private router:Router, public darkModeService:DarkModeService){}

  toggleOpen() {
    this.open = !this.open;
  }

  routerLink(route:string){
    this.router.navigate([route]);
    this.activeOffcanvas.close();
  }

}
