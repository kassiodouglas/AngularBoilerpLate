import { MeService } from './../../../features/me/services/me.service';
import { Component, OnInit } from '@angular/core';
import { SidebarLink } from '../../models/SidebarLink';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarLinksService } from '../../services/sidebar-links.service';


@Component({
  selector: 'layout',
  standalone:false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  isOpen!:boolean;

  links!:SidebarLink[];

  constructor(
    private sidebarLinksService:SidebarLinksService,
    public meService:MeService,
  ){}

  ngOnInit() {
    this.isOpen = this.sidebarStatus
    this.links = this.sidebarLinksService.links;
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
