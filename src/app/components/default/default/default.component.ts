import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private readonly keycloak: KeycloakService) {
  }

  async ngOnInit() {
    this.isLoggedIn = this.keycloak.isLoggedIn();
  }
}
