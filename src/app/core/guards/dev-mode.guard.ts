import { CanActivateFn } from '@angular/router';
import { environment } from '../../../environments/environment';

export const devModeGuard: CanActivateFn = (route, state) => {

  if (!['development', 'mock'].includes(environment.mode)) {
    return false;
  }

  return true;
};
