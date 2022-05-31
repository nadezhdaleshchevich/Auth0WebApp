import * as config from '../../auth_config.json';

const { domain, clientId, audience, apiUri, servirUri } = config as {
  domain: string;
  clientId: string;
  audience?: string;
  apiUri: string;
  servirUri: string
};

export const environment = {
  production: false,
  auth:{
    domain,
    clientId,
    audience
  },

  httpInterceptor:{
    allowedList: [
      {
        uri: `${apiUri}/*`,
        tokenOptions: {
          audience: audience,
          scope: 'read:current_user'
        }
      }
    ]
  },
  dev: {
    apiUri
  }
};