import { Injectable } from '@angular/core';
import Notiflix from 'notiflix';
import { DarkModeService } from '../dark-mode.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {

  constructor(private darkModeService:DarkModeService){}

  private init() {
    Notiflix.Report.init({
      backgroundColor: this.darkModeService.isDarkMode ? '#1c1818' : '#fff',
      borderRadius: '10px',
      backOverlayClickToClose: false,
      svgSize:'60px',

      success: {
        titleColor: this.darkModeService.isDarkMode ? '#fff' : '#1e1e1e',
        messageColor: this.darkModeService.isDarkMode ? '#fff' : '#242424',
      },
      failure: {
        titleColor: this.darkModeService.isDarkMode ? '#fff' : '#1e1e1e',
        messageColor: this.darkModeService.isDarkMode ? '#fff' : '#242424',
      },
      warning: {
        titleColor: this.darkModeService.isDarkMode ? '#fff' : '#1e1e1e',
        messageColor: this.darkModeService.isDarkMode ? '#fff' : '#242424',
      },
      info: {
        titleColor: this.darkModeService.isDarkMode ? '#fff' : '#1e1e1e',
        messageColor: this.darkModeService.isDarkMode ? '#fff' : '#242424',
      },

    });
  }

  success(title: string, message: string, buttonLabel: string) {
    this.init();
    Notiflix.Report.success(title, message, buttonLabel);
  }

  error(title: string, message: string, buttonLabel: string) {
    this.init();
    Notiflix.Report.failure(title, message, buttonLabel);
  }

  warning(title: string, message: string, buttonLabel: string) {
    this.init();
    Notiflix.Report.warning(title, message, buttonLabel);
  }

  info(title: string, message: string, buttonLabel: string) {
    this.init();
    Notiflix.Report.info(title, message, buttonLabel);
  }


}
