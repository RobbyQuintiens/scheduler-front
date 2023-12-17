import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutes} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {KeycloakInitService} from "./auth/keycloak-init.service";
import {HttpClientModule} from "@angular/common/http";
import {TestComponent} from "./components/test/test.component";
import {DefaultComponent} from "./components/default/default/default.component";
import {HeaderComponent} from "./components/header/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppointmentService} from "./services/appointment.service";
import {AppointmentCardComponent} from "./components/appointments/appointment-card/appointment-card.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    DefaultComponent,
    HeaderComponent,
    AppointmentCardComponent
  ],
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: KeycloakInitService,
      multi: true,
      deps: [KeycloakService]
    },
  AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
