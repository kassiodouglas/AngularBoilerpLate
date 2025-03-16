import { Injectable } from '@angular/core';
import Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {

  private init(){
    Notiflix.Notify.init({
      width: '300px',
      position: 'center-bottom',
      closeButton: false,
      cssAnimationStyle: 'from-bottom',
      clickToClose:true,
      plainText:false,
      messageMaxLength:300,
      distance:'55px',
      showOnlyTheLastOne:true
      });
  }


  success(message: string) {
    this.init();
    Notiflix.Notify.success(message);
  }

  error(message: string) {
    this.init();
    Notiflix.Notify.failure(message);
  }

  warning(message: string) {
    this.init();
    Notiflix.Notify.warning(message);
  }

  info(message: string) {
    this.init();
    Notiflix.Notify.info(message);
  }

}
