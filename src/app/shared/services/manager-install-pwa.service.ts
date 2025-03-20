import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  // Use BehaviorSubject em vez de Subject

@Injectable({
  providedIn: 'root'
})
export class ManagerInstallPwaService {

  private promptEvent: any = null;
  private isInstallPromptVisibleSubject = new BehaviorSubject<boolean>(false);
  isInstallPromptVisible$ = this.isInstallPromptVisibleSubject.asObservable();

  constructor() {
    const lastDismissed = localStorage.getItem('installPromptDismissed');
    const dismissTime = lastDismissed ? parseInt(lastDismissed, 10) : 0;
    const currentTime = new Date().getTime();
    const TIME_TO_WAIT = 15 * 24 * 60 * 60 * 1000; // 15 dias


    if (dismissTime === 0 || currentTime - dismissTime > TIME_TO_WAIT) {
      console.log('Showing prompt');
      this.isInstallPromptVisibleSubject.next(true);
    }
  }

  // Escuta o evento 'beforeinstallprompt'
  handleBeforeInstallPrompt(event: any) {
    event.preventDefault();
    this.promptEvent = event;

    if (localStorage.getItem('installPromptDismissed') === null) {
      this.isInstallPromptVisibleSubject.next(true);
    }
  }

  // Função chamada ao clicar no botão 'Instalar'
  installApp() {
    if (this.promptEvent) {
      this.promptEvent.prompt();
      this.promptEvent = null;
      this.isInstallPromptVisibleSubject.next(false);
    }
  }

  // Função chamada ao clicar no botão 'Não instalar agora'
  dismissPrompt() {
    this.isInstallPromptVisibleSubject.next(false);
    localStorage.setItem('installPromptDismissed', new Date().getTime().toString());
  }
}
