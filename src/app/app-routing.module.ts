import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppAuthGuard} from "./auth/app-auth-guard";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'app',
    canActivate: [AppAuthGuard],
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AppAuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
