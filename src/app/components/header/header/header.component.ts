import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  username?: string;
  menuOpen = false;

  constructor(private readonly keycloak: KeycloakService) {
  }

  async getUserInfo(): Promise<UserDetails> {
    const keycloakInstance = this.keycloak.getKeycloakInstance();
    const userInfo = await keycloakInstance.loadUserInfo();
    // Assuming userInfo is of type 'any', you can use a type assertion
    return userInfo as UserDetails;
  }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();
    const userDetails = await this.getUserInfo();
    this.username = userDetails.given_name;
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout(window.location.origin).then(() => this.keycloak.clearToken());
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
