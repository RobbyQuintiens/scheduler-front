import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutes, AppRoutingModule} from './app-routing.module';
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
import {MatGridListModule} from "@angular/material/grid-list";
import {MenuComponent} from "./components/menu/menu.component";
import {MatIconModule} from "@angular/material/icon";
import {CustomerListComponent} from "./components/customers/customer-list/customer-list.component";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {CustomerFilterComponent} from "./components/customers/customer-filter/customer-filter.component";
import {CustomerCardComponent} from "./components/customers/customer-card/customer-card.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CustomerComponent} from "./components/customers/customer/customer.component";
import {AddCustomerComponent} from "./components/customers/add-customer/add-customer.component";
import {MatStepperModule} from "@angular/material/stepper";
import {
  CompanyDetailsMainComponent
} from "./components/companyDetails/company-details-main/company-details-main.component";
import {BillingMainComponent} from "./components/billing/billing-main/billing-main.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    DefaultComponent,
    HeaderComponent,
    AppointmentCardComponent,
    MenuComponent,
    CustomerListComponent,
    CustomerFilterComponent,
    CustomerCardComponent,
    CustomerComponent,
    AddCustomerComponent,
    CompanyDetailsMainComponent,
    BillingMainComponent
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
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatStepperModule
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
