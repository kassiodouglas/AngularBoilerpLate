import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-link',
  standalone:false,
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.scss'
})
export class LayoutSidebarLinkComponent {

  @Input({required:true}) link!:{link?:string, label:string, icon?:string};

  get separator(){
    return this.link.label == 'separator' ? true : false;
  }

}
