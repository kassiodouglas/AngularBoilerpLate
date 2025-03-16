import { Injectable } from '@angular/core';
import Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  private init(){
    Notiflix.Loading.init({
      svgColor: '#fff',
    });
  }

  loading(message: string = '') {
    this.init();
    Notiflix.Loading.circle(message);
  }

  remove(delay:number) {
    const block = Notiflix.Loading;
    if(delay)
      block.remove(delay);
    else
      block.remove();
  }

}
