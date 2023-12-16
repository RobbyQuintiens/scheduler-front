import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isLoggedIn = false;

  constructor(private readonly keycloak: KeycloakService) {
  }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout(window.location.origin).then(() => this.keycloak.clearToken());
  }

}
