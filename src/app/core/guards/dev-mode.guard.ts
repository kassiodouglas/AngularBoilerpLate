import { CanActivateFn } from '@angular/router';
import { environment } from '../../../environments/environment';

export const devModeGuard: CanActivateFn = (route, state) => {

  if(environment.mode != 'development'){
    return false;
  }

  return true;
};
