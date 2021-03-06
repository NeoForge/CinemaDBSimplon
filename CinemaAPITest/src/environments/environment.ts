// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey : "07dd7359e1dadfa94d57a40931b9bf32",
  apiUrl: "https://api.themoviedb.org/3",
  imageUrl: "https://image.tmdb.org/t/p/",
  application:
  {
    name: 'api-simplon',
    angular: 'Angular 13.1.1',
    bootstrap: 'Bootstrap 5.1.3',
    fontawesome: 'Font Awesome 5.15.4',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
