import { TablyUsersService } from './services/tably-users-service.service';
import { Component, OnInit } from '@angular/core';
import { TablyHeaderConfig } from '../../../../shared/components/tably/models/tably-header-config';
import { TablyRowConfig } from '../../../../shared/components/tably/models/tably-row-config';

@Component({
  selector: 'page-tably',
  standalone: false,
  templateUrl: './tably.component.html',
  styleUrl: './tably.component.scss'
})
export class TablyComponent implements OnInit {

  tablyHeaderConfig:TablyHeaderConfig[] = [
    {label:"Nome", field:"name",type:"string", searcheable:true, ordenable:true},
    {label:"Login", field:"login",type:"string", searcheable:true, ordenable:true},
    {label:"Ultimo acesso em", field:"last_access", type:"datetime", searcheable:false, ordenable:true},
    {label:"Status", field:"status",type:"string", searcheable:false, ordenable:true},
  ];
  tablyRows:TablyRowConfig[] = [];

  constructor(
    public tablyUsersService:TablyUsersService
  ){}

  ngOnInit(){
    this.tablyUsersService.users().subscribe(response=> this.tablyRows = response);
  }

}
