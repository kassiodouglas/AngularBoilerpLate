import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {

  isDarkMode: boolean = false;

  initialize() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.updateThemeClass();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');

    this.updateThemeClass();
  }

  public updateThemeClass(): void {
    const root = document.documentElement;

    if (this.isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }

}
