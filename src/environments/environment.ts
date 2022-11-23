// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Token } from "@angular/compiler";

export const environment = {
  production: false, 
  urlBackend : 'http://localhost:3001',
  tokenName: 'token',
  rolName: 'rol'

}