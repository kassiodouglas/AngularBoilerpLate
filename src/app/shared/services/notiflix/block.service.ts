import { Injectable } from '@angular/core';
import Notiflix from 'notiflix';
import { DarkModeService } from '../dark-mode.service';

@Injectable({
  providedIn: 'root',
})
export class BlockService {

  constructor(private darkModeService:DarkModeService){}

  private init() {
    Notiflix.Block.init({
      svgSize: '45px',
      backgroundColor: this.darkModeService.isDarkMode ? 'rgba(48, 54, 48, 0.8)' : '#fff',
      svgColor: this.darkModeService.isDarkMode ? '#fff' : '#303630',
    });
  }

  block(selector: string){
    this.init();
    Notiflix.Block.standard(selector);
  }

  unblock(selector: string, delay?:number){
    const block = Notiflix.Block;
    if(delay)
      block.remove(selector, delay);
    else
      block.remove(selector);

  }

}
