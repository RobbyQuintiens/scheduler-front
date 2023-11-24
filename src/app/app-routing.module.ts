import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppAuthGuard} from "./auth/app-auth-guard";
import {LoginComponent} from "./components/login/login.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AppAuthGuard],
    component: LoginComponent,
    data: { roles: ['user'] },
  },
  {
    path: 'app',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AppAuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
