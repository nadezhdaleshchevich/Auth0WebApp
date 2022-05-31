import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '@auth0/auth0-angular';

import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService ,
    public http: HttpClient   
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ returnTo: document.location.origin });
  }

  callClaims(): void {
    this.http.get(`${env.dev.apiUri}/claims/`).subscribe(result => console.log(result));
  }
}


