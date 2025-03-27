/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MINDBODY_API_KEY: string;
  readonly VITE_MINDBODY_SITE_ID: string;
  readonly VITE_MINDBODY_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 