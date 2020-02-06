const site = 'http://localhost:4200/';

const encodedSite = encodeURIComponent(site);
const loginUrl = `http://localhost:3000/auth-callback/`;

export const environment = {
  production: false,
  site: site,
  encodedSite: encodedSite,
  signin_uri: loginUrl + 'signin/',
  silent_redirect_uri: loginUrl + 'silent-renew/',
  logout_redirect_uri: loginUrl + 'signout/',
  freeTrialUrl: loginUrl
};
