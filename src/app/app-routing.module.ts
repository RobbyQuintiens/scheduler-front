import {RouterModule, Routes} from '@angular/router';
import {AppAuthGuard} from "./auth/app-auth-guard";
import {LoginComponent} from "./components/login/login.component";
import {CustomerListComponent} from "./components/customers/customer-list/customer-list.component";
import {NgModule} from "@angular/core";
import {TestComponent} from "./components/test/test.component";
import {CustomerComponent} from "./components/customers/customer/customer.component";
import {AddCustomerComponent} from "./components/customers/add-customer/add-customer.component";
import {
  CompanyDetailsMainComponent
} from "./components/companyDetails/company-details-main/company-details-main.component";
import {BillingMainComponent} from "./components/billing/billing-main/billing-main.component";

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AppAuthGuard],
    component: LoginComponent,
    data: {roles: ['app_user']},
  },
  {
    path: 'customers',
    component: CustomerComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'add-customer',
    component: AddCustomerComponent,
  },
  {
    path: 'company',
    component: CompanyDetailsMainComponent,
  },
  {
    path: 'billing',
    component: BillingMainComponent,
  }
];

export const AppRoutes = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
