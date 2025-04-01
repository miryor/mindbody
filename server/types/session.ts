export interface Session {
  id: string;
  accessToken: string;
  idToken: string;
  refreshToken: string | null;
  tokenType: string;
  clientInfo: any;
  expiresAt: number;
  timezone: string;
} 