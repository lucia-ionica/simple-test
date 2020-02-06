// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const site = 'http://localhost:4200/';

const encodedSite = encodeURIComponent(site);
const serverSite = `http://localhost:3000/`;
const loginUrl = serverSite + `auth-callback/`;

export const environment = {
  production: false,
  site: site,
  encodedSite: encodedSite,
  serverSite: serverSite,
  signin_uri: loginUrl + 'signin/',
  silent_redirect_uri: loginUrl + 'silent-renew/',
  logout_redirect_uri: loginUrl + 'signout/',
  freeTrialUrl: loginUrl
};
