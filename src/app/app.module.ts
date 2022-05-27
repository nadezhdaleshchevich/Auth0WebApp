import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { UserAuthService } from './services/user-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule.forRoot({
      domain: 'dev-vada8fqr.us.auth0.com',
      clientId: 'VLHH9EezzHTiMkuVf1DW2sj0FeJ5XbWx'
    }),
  ],
  providers: [ UserAuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
