import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'next-gen-global-portal-app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() isLogged = false;

  constructor() {
    console.log('NAVBAR constructor');
  }

  ngOnInit(): void {
    console.log('NAVBAR');
  }
}
