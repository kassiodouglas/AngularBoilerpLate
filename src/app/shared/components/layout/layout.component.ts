import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  standalone:false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  isOpen!:boolean;

  links:{link?:string, label:string, icon?:string}[] = [
    {link:"",label:"Dashboard", icon:"<i class='fa-solid fa-gauge-high'></i>"},
    {link:"clientes",label:"Clientes", icon:"<i class='fa-solid fa-mug-hot'></i>"},
    {link:"usuarios",label:"Usuários", icon:"<i class='fa-solid fa-users'></i>"},
    {link:"apps",label:"Apps", icon:"<i class='fa-solid fa-mobile-screen-button'></i>"},
    {link:"pagamentos",label:"Pagamentos", icon:"<i class='fa-solid fa-hand-holding-dollar'></i>"},
    {link:"parametros",label:"Parâmetros", icon:"<i class='fa-solid fa-cubes'></i>"},
    {label:"separator"},
    {link:"meus-dados",label:"Meus dados", icon:"<i class='fa-solid fa-circle-user'></i>"},

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
