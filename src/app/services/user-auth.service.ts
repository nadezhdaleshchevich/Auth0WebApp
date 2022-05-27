import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) { }

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void { 
    this.auth.logout({ returnTo: document.location.origin })
  }

  isAuthenticated() {
    return this.auth.isAuthenticated$;
  }
}
