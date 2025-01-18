import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet/>',
})
export class AppComponent {

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
