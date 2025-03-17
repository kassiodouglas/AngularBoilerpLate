import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  public userAvatarPath:string = 'images/avatar/user-avatar.png'

  constructor() { }

  getUserAvatar(){
    return this.userAvatarPath;
  }

  get urlAvatar(){
    return `url(${this.userAvatarPath})`;
  }

}
