import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {TestComponent} from "./components/test/test.component";
import {AppAuthGuard} from "./auth/app-auth-guard";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AppAuthGuard],
    component: LoginComponent,
    data: { roles: ['app_user'] },
    redirectTo: 'test'
  },
  {
    path: 'test',
    component: TestComponent,
  },
];

export const AppRoutes = RouterModule.forRoot(routes, {useHash: true});
