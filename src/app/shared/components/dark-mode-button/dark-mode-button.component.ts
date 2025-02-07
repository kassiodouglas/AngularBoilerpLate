import { DarkModeService } from './../../services/dark-mode.service';
import { Component } from '@angular/core';

@Component({
  selector: 'dark-mode-button',
  standalone: false,
  templateUrl: './dark-mode-button.component.html',
  styleUrl: './dark-mode-button.component.scss'
})
export class DarkModeButtonComponent {
  isDarkMode: boolean = false;

  constructor(public darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.isDarkMode = this.darkModeService.isDarkMode;
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

}
