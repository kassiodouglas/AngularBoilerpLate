import { Component, OnInit } from '@angular/core';
import { SidebarLink } from '../../models/SidebarLink';


@Component({
  selector: 'layout',
  standalone:false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  avatar = "url(data:image/jpeg;base64,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)";

  isOpen!:boolean;

  links:SidebarLink[] = [
    {link:"",label:"Home", icon:"<i class='fa-solid fa-gauge-high'></i>"},
    {
      links:
      [
        {link:"dev/module/formulary",label:"Formulary", icon:"<i class='fa-solid fa-align-left'></i>"},
        {link:"dev/module/notiflix",label:"Notiflix", icon:"<i class='fa-solid fa-bell'></i>"},
        {link:"dev/buttons",label:"Buttons", icon:"<i class='fa-solid fa-stop'></i>"},
        {link:"dev/modals",label:"Modal", icon:"<i class='fa-solid fa-table-columns'></i>"},
        {link:"dev/offcanvas",label:"Offcanvas", icon:"<i class='fa-solid fa-chalkboard'></i>"},
        {label:"separator"},
      ],
      label:"Playground", icon:"<i class='fa-solid fa-mug-hot'></i>"
    },

    {label:"separator"},
    {link:"login",label:"Logout", icon:"<i class='fa-solid fa-right-from-bracket'></i>"},
  ];

  ngOnInit() {
    this.isOpen = this.sidebarStatus
  }

  toggleSidebar(){
    this.isOpen = !this.isOpen;
    this.sidebarStatus = this.isOpen
  }

  get sidebarStatus():boolean {
    return localStorage.getItem('sidebar')=='true' ? true : false;
  }

  set sidebarStatus(status:boolean) {
    localStorage.setItem('sidebar', String(status));
  }

}
