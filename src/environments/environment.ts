// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDuhLztS64Ka3MgXt9juQXe8JcaTI4eUNs',
    authDomain: 'http://localhost:4200',
    databaseURL: 'https://twitter-app-d9abf.firebaseio.com',
    projectId: 'twitter-app-d9abf',
    storageBucket: 'twitter-app-d9abf.appspot.com',
    messagingSenderId: '821140649131'
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
