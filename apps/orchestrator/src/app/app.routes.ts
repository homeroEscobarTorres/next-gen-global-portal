import { Routes } from '@angular/router';
import { LoggedOnlyGuard } from './core/services/guards/logged-only.guard';
import { UnloggedOnlyGuard } from './core/services/guards/unlogged-only.guard';
import { Microfrontend } from './core/services/microfrontends/microfrontend.types';
import { environment } from '../environments/environment';

export const APP_ROUTES: Routes = [];

export const MICROFRONTEND_ROUTES: Microfrontend[] = [
  {
    ...environment.microfrontends.homepage,
    exposedModule: environment.microfrontends.homepage.exposedModule[0],

    // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
    displayName: 'Homepage',
    routePath: '',
    ngModuleName: 'HomepageModule',
    canActivate: [LoggedOnlyGuard],
  },
  {
    ...environment.microfrontends.login,
    exposedModule: environment.microfrontends.login.exposedModule[0],

    displayName: 'Login',
    routePath: 'login',
    ngModuleName: 'LoginPageModule',
    canActivate: [UnloggedOnlyGuard],
  },
];
