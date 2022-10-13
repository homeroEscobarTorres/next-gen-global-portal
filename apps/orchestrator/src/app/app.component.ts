import {
  ViewContainerRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  AfterViewInit,
  Injector,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';
import { loadRemoteModule } from './utils/federation-utils';
import { environment } from '../environments/environment';

@Component({
  selector: 'next-gen-global-portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  $eventBus: Subscription | undefined;
  loadingRouteConfig = false;

  constructor(
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    public auth: AuthService,
    private router: Router
  ) {}

  onEventHandler(e: CustomEvent) {
    if (e.detail.eventType === 'auth-register') {
      const isLogged = Boolean(localStorage.getItem('token'));
      this.auth.isLogged = isLogged;
      if (isLogged) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }

  ngOnInit() {
    this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-bus').subscribe(
      (e) => this.onEventHandler(e)
    );
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }
    });
  }

  ngAfterViewInit(): void {
    // load components
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    this.$eventBus?.unsubscribe();
  }
}
