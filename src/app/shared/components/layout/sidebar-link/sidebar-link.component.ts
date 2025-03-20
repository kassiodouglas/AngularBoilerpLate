import { ScreenService } from './../../../services/screen.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarLink } from '../../../models/SidebarLink';

@Component({
  selector: 'sidebar-link',
  standalone:false,
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.scss'
})
export class LayoutSidebarLinkComponent {

  open = false;

  @Input({required:true}) link!:SidebarLink;
  @Output() onCloseSidebar: EventEmitter<void> = new EventEmitter();

  constructor(private screenService:ScreenService){}

  toggleOpen(){
    this.open = !this.open;
  }

  closeSidebar(){
    if(this.screenService.currentSize == 'sm')
    this.onCloseSidebar.emit();
  }

  get separator(){
    return this.link.label == 'separator' ? true : false;
  }

  get isSubLink(){
    return this.link.links ? true : false;
  }

}
