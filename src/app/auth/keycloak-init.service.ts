import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

export function KeycloakInitService(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise<void>(async (resolve, reject) => {
        try {
          await keycloak.init({
            config: {
              url: 'http://localhost:8080/',
              realm: 'demo',
              clientId: 'demo-service',
            },
            initOptions: {
              onLoad: 'check-sso',
              checkLoginIframe: false,
              flow: 'implicit'
            },
            loadUserProfileAtStartUp: false,
            enableBearerInterceptor: true
          });
          resolve();
        } catch (error) {
          reject(error);
        }
      }
    )
      .catch((e) => {
        console.log('Error thrown in init ' + e);
      });
  };
}
