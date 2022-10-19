export const server = 'http://localhost:17525';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-bjvagtwe.us.auth0.com',
  client_id: 'J1FUtqgGewRVBA9YubJcloMbZFv3hNKP',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
