import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MICROFRONTEND_ROUTES } from '../../../app.routes';
import { buildRoutes } from '../../../utils/route-utils';

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  constructor(private router: Router) {}

  /*
   * Initialize is called on app startup to load the initial list of
   * remote microfrontends and configure them within the router
   */
  initialise(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.router.resetConfig(buildRoutes(MICROFRONTEND_ROUTES));
      return resolve();
    });
  }
}
