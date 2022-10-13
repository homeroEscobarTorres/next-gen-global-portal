import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-gen-global-portal-app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor() {
    console.log('LOADER constructor');
  }

  ngOnInit(): void {
    console.log('LOADER');
  }
}
