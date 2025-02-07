import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss'],
  standalone:false
})
export class SidebarLinkComponent {

  @Input({required:true}) label!:string;
  @Input() sub = false;
  opened = false

  open(){
    if(!this.sub) return;
    this.opened = !this.opened;
  }

}
