import {RouterModule, Routes} from '@angular/router';
import {AppAuthGuard} from "./auth/app-auth-guard";
import {LoginComponent} from "./components/login/login.component";
import {CustomerListComponent} from "./components/customers/customer-list/customer-list.component";
import {NgModule} from "@angular/core";
import {TestComponent} from "./components/test/test.component";

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AppAuthGuard],
    component: LoginComponent,
    data: {roles: ['app_user']},
  },
  {
    path: 'customers',
    component: CustomerListComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
];

export const AppRoutes = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
