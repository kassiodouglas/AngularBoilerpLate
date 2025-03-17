import { Component, Input } from '@angular/core';
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

  toggleOpen(){
    this.open = !this.open;
  }

  get separator(){
    return this.link.label == 'separator' ? true : false;
  }

  get isSubLink(){
    return this.link.links ? true : false;
  }

}
