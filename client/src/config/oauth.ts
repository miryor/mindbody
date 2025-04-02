export const OAUTH_CONFIG = {
  clientId: import.meta.env.VITE_MINDBODY_CLIENT_ID,
  authorizeUrl: import.meta.env.VITE_MINDBODY_API_AUTHORIZE_URL,
  tokenUrl: import.meta.env.VITE_MINDBODY_API_TOKEN_URL,
  // This must match exactly what is registered in the Mindbody Partner Portal
  redirectUri: import.meta.env.VITE_OAUTH_REDIRECT_URI,
  // Update scopes to match Mindbody's requirements
  scope: [
    'email',
    'profile',
    'openid',
    'offline_access',
    'Platform.Contacts.Api.Write',
    'Platform.Contacts.Api.Read',
    'Platform.Accounts.Api.Read',
    'Mindbody.Api.Public.v6'
  ].join(' '),
  responseType: 'code id_token',
  responseMode: 'form_post',
  subscriberId: import.meta.env.VITE_MINDBODY_SITE_ID,
};

export function generateAuthUrl(): string {
  const nonce = generateRandomState(); // Using the same function for nonce
  const params = new URLSearchParams({
    client_id: OAUTH_CONFIG.clientId,
    redirect_uri: OAUTH_CONFIG.redirectUri,
    response_type: OAUTH_CONFIG.responseType,
    response_mode: OAUTH_CONFIG.responseMode,
    scope: OAUTH_CONFIG.scope,
    state: generateRandomState(),
    nonce: nonce,
    subscriberId: OAUTH_CONFIG.subscriberId || '',
  });

  return `${OAUTH_CONFIG.authorizeUrl}?${params.toString()}`;
}

function generateRandomState(): string {
  return Math.random().toString(36).substring(2, 15);
} 