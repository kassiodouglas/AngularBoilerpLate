import { DarkModeService } from './../dark-mode.service';
import { Injectable } from '@angular/core';
import Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {

  constructor(private darkModeService:DarkModeService){}

  private init() {
    Notiflix.Confirm.init({
      position: 'center',
      borderRadius: '10px',
      backgroundColor: this.darkModeService.isDarkMode ? 'rgb(17 24 39)' : '#fff',
      titleColor: this.darkModeService.isDarkMode ? '#8c8281' : '#000',
      messageColor: this.darkModeService.isDarkMode ? '#e3e3e3' : '#000',
      okButtonBackground: this.darkModeService.isDarkMode ? '#1e7827' : '#000',
      okButtonColor: this.darkModeService.isDarkMode ? '#fff' : '#000',
      cancelButtonBackground: this.darkModeService.isDarkMode ? '#303630' : '#000',
      cancelButtonColor: this.darkModeService.isDarkMode ? '#fff' : '#000',
    });
  }

  confirm(
    labelYes: string = "Sim",
    labelNo: string = "Não",
    title: string = "Confrmação",
    message: string,
    onConfirm: () => void,
    onCancel: () => void = () => {}
  ) {
    this.init();
    Notiflix.Confirm.show(
      title,
      message,
      labelYes,
      labelNo,
      onConfirm,
      onCancel
    );
  }

}
