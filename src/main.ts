import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { startMockServer } from './mock-server/server';
import { environment } from './environments/environment';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('ngsw-worker.js').then(registration => {
      console.log('Service Worker registrado com sucesso:', registration);
    }).catch(error => {
      console.log('Falha ao registrar o Service Worker:', error);
    });
  });
}

async function startApp() {
  if (environment.mode === 'mock') {
    console.log('Starting mock server')
    await startMockServer();
  }
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
}

startApp();
