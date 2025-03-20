import { ManagerInstallPwaService } from './shared/services/manager-install-pwa.service';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { DarkModeService } from './shared/services/dark-mode.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  template: `
    <router-outlet></router-outlet>
    <div *ngIf="isInstallPromptVisible$ | async" class="flex flex-col md:flex-row space-y-6 fixed bg-secondary-200 dark:bg-secondary-800 w-screen top-5 z-50 justify-center items-center text-secondary-900 font-bold dark:text-secondary-100 p-3 shadow-md" data-aos="fade-down">
      <p class="col-span-2">Este aplicativo pode ser instalado no seu dispositivo. Deseja instalar agora?</p>
      <button class="btn-md-success m-1 w-full md:max-w-[200px]" (click)="managerInstallPwaService.installApp()">Sim, instale</button>
      <button class="btn-md-secondary m-1 w-full md:max-w-[200px]" (click)="managerInstallPwaService.dismissPrompt()">Agora não</button>
    </div>
  `,
})
export class AppComponent {
  isInstallPromptVisible$!: Observable<boolean>;

  constructor(
    private darkModeService: DarkModeService,
    public managerInstallPwaService: ManagerInstallPwaService
  ) {
    this.isInstallPromptVisible$ = this.managerInstallPwaService.isInstallPromptVisible$;
  }

  ngOnInit(): void {

    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.darkModeService.initialize();
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: any) {
    this.managerInstallPwaService.handleBeforeInstallPrompt(event);
  }

}
