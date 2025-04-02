/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MINDBODY_API_KEY: string;
  readonly VITE_MINDBODY_SITE_ID: string;
  readonly VITE_MINDBODY_API_URL: string;
  readonly VITE_MINDBODY_CLIENT_ID: string;
  readonly VITE_OAUTH_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 