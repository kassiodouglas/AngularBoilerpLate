import { NotifyService } from './../../../../../shared/services/notiflix/notify.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { TablyRowConfig } from '../../../../../shared/components/tably/models/tably-row-config';

@Injectable({
  providedIn: 'root',
})
export class TablyUsersService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient:HttpClient,
    private notifyService:NotifyService,

  ){}

  users(){
    return this.httpClient.get<any>(`${this.apiUrl}/users`).pipe(map(response => response.users));
  }

  blockUser(event:TablyRowConfig){
    this.notifyService.success("Usuário bloqueado!");
  }

  editUser(event:TablyRowConfig){
    this.notifyService.warning("Edição de usuário!");
  }

  exportUser(event:TablyRowConfig){
    this.notifyService.success("Usuário exportado!");
  }

  blockSelectedUsers(event:TablyRowConfig){
    this.notifyService.success("Usuários selecionados bloqueados!");
  }

  exportSelectedUsers(event:TablyRowConfig){
    this.notifyService.success("Usuários selecionados exportados!");
  }
}
