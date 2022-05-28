// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from 'firebase/app';

export const environment = {
  firebase: {
    apiKey: "AIzaSyACELWSYk7x3Oh8kAa5lfrh9SEBf_6RzSc",
    authDomain: "lab-aplicaciones.firebaseapp.com",
    projectId: "lab-aplicaciones",
    storageBucket: "lab-aplicaciones.appspot.com",
    messagingSenderId: "519809668882",
    appId: "1:519809668882:web:80d479877a62c1621085cb"
  },
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyACELWSYk7x3Oh8kAa5lfrh9SEBf_6RzSc",
  authDomain: "lab-aplicaciones.firebaseapp.com",
  projectId: "lab-aplicaciones",
  storageBucket: "lab-aplicaciones.appspot.com",
  messagingSenderId: "519809668882",
  appId: "1:519809668882:web:80d479877a62c1621085cb"
  }
};
const app= initializeApp(environment.firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
