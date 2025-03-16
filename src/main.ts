import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { startMockServer } from './mock-server/server';
import { environment } from './environments/environment';

async function startApp() {
  if (environment.mode === 'mock') {
    console.log('Starting mock server')
    await startMockServer();
  }
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
}

startApp();
