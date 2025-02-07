import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { DarkModeService } from './shared/services/dark-mode.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet/>',
})
export class AppComponent {

  constructor(private darkModeService:DarkModeService){}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    this.darkModeService.initialize();
  }
}
