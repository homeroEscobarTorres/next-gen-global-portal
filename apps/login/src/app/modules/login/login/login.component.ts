import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-gen-global-portal-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {
    console.log('Login constructor');
  }

  ngOnInit(): void {
    //
    console.log('Login oninit');
  }

  //   formSubmitted (values: RegisterFormValues) {
  //     this.auth.register(values).subscribe((res) => {
  //       localStorage.setItem('token', res.token);
  //       const busEvent = new CustomEvent('app-event-bus', {
  //         bubbles: true,
  //         detail: {
  //           eventType: 'auth-register'
  //         }
  //       });
  //       dispatchEvent(busEvent);
  //     });
  //   }
}
