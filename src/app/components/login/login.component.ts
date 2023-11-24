import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private readonly keycloak: KeycloakService) {
  }

  public login() {
    this.keycloak.login();
  }

  ngOnInit(): void {
  }
}
