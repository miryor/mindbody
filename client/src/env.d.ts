/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MINDBODY_SITE_ID: string;
  readonly VITE_MINDBODY_API_URL: string;
  readonly VITE_MINDBODY_API_AUTHORIZE_URL: string;
  readonly VITE_MINDBODY_API_TOKEN_URL: string;
  readonly VITE_MINDBODY_CLIENT_ID: string;
  readonly VITE_OAUTH_REDIRECT_URI: string;
  readonly VITE_MINDBODY_API_ENDSESSION_URL: string;
  readonly VITE_OAUTH_LOGOUT_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 