import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-gen-global-portal-app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {
    console.log('HOMEPAGE  constructor');
  }

  ngOnInit() {
    console.log('HOMEPAGE');
  }
}
