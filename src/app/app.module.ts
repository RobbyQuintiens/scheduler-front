import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {KeycloakInitService} from "./auth/keycloak-init.service";

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: KeycloakInitService,
      multi: true,
      deps: [KeycloakService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
