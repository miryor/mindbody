import express from 'express';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { Session } from '../types/session';
import { sessions } from './sessionStore'; // Assuming sessionStore exports the sessions map

// Interfaces for configuration
interface StaffCredentials {
    username: string;
    password: string;
}

interface OAuthConfig {
    clientId: string; // Needed for potential future refresh logic?
    clientSecret: string; // Needed for potential future refresh logic?
    tokenUrl: string; // Mindbody token endpoint
}

interface SharedConfig {
    apiKey: string;
    siteId: string;
    apiUrl: string; // Mindbody API base URL
}

export interface AuthServiceConfig extends SharedConfig {
    staff: StaffCredentials;
    oauth: OAuthConfig;
}

// Internal state for staff token
interface StaffTokenState {
    accessToken: string | null;
    expirationTime: number | null; // Unix timestamp (ms)
    renewalPromise: Promise<string> | null;
}

// Interface for Authorization Headers result
export interface AuthorizationHeaders {
    'Authorization': string;
    'API-Key': string;
    'SiteId': string;
    [key: string]: string; // Allow other headers like Content-Type if needed later
}

export class AuthService {
    private config: AuthServiceConfig;
    private staffTokenState: StaffTokenState;
    private readonly STAFF_TOKEN_ENDPOINT = '/usertoken/issue';
    private readonly TOKEN_EXPIRY_BUFFER_MS = 5 * 60 * 1000; // Renew 5 minutes before expiry

    constructor(config: AuthServiceConfig) {
        this.config = config;
        this.staffTokenState = {
            accessToken: null,
            expirationTime: null,
            renewalPromise: null,
        };
        console.log('AuthService initialized.');
    }

    // --- Staff Token Management ---

    private async _renewStaffToken(): Promise<string> {
        console.log('AuthService: Staff token renewal requested.');

        // If renewal is already in progress, wait for it
        if (this.staffTokenState.renewalPromise) {
            console.log('AuthService: Staff token renewal already in progress, waiting...');
            return this.staffTokenState.renewalPromise;
        }

        console.log('AuthService: Starting new staff token renewal process.');

        // Create and store the renewal promise
        const renewalPromise = (async (): Promise<string> => {
            console.log(`AuthService: Sending staff token renewal request to ${this.config.apiUrl}${this.STAFF_TOKEN_ENDPOINT}`);
            try {
                const response: AxiosResponse<{ AccessToken: string; Expires: string }> = await axios.post(
                    `${this.config.apiUrl}${this.STAFF_TOKEN_ENDPOINT}`,
                    { // Use object directly, axios stringifies by default if content-type is json
                        username: this.config.staff.username,
                        password: this.config.staff.password,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'API-Key': this.config.apiKey,
                            'SiteId': this.config.siteId,
                        },
                        timeout: 10000, // 10 second timeout for token request
                    }
                );

                console.log('AuthService: Staff token renewal response received:', {
                    status: response.status,
                    // data: response.data // Avoid logging sensitive token/expiry directly
                });

                const newAccessToken = response.data.AccessToken;
                const expiresString = response.data.Expires; // e.g., "2024-07-29T18:00:00Z"

                if (!newAccessToken || !expiresString) {
                     throw new Error('Invalid token response structure received from Mindbody.');
                }

                this.staffTokenState.accessToken = newAccessToken;
                // Convert ISO string expiry date to Unix timestamp (milliseconds)
                this.staffTokenState.expirationTime = new Date(expiresString).getTime();

                console.log(`AuthService: Staff token renewal successful. Expires at: ${expiresString} (${this.staffTokenState.expirationTime})`);
                return newAccessToken;

            } catch (error) {
                console.error('AuthService: Staff token renewal request failed:', this._formatAxiosError(error));
                // Clear potentially invalid state
                this.staffTokenState.accessToken = null;
                this.staffTokenState.expirationTime = null;
                throw new Error(`Failed to renew staff token: ${error instanceof Error ? error.message : 'Unknown error'}`); // Rethrow a simpler error
            } finally {
                // Clear the promise regardless of outcome
                this.staffTokenState.renewalPromise = null;
                console.log('AuthService: Staff token renewal process completed.');
            }
        })();

        this.staffTokenState.renewalPromise = renewalPromise;
        return renewalPromise;
    }

    private isStaffTokenValid(): boolean {
        return !!(
            this.staffTokenState.accessToken &&
            this.staffTokenState.expirationTime &&
            Date.now() < (this.staffTokenState.expirationTime - this.TOKEN_EXPIRY_BUFFER_MS)
        );
    }

    public async getStaffToken(): Promise<string> {
        if (this.isStaffTokenValid() && this.staffTokenState.accessToken) {
             console.log('AuthService: Using existing valid staff token.');
            return this.staffTokenState.accessToken;
        } else {
            console.log('AuthService: Staff token invalid or expired, initiating renewal.');
            return this._renewStaffToken();
        }
    }

    // --- Client Session Management ---

    private getClientSession(req: express.Request): Session | undefined {
        const sessionId = req.cookies?.sessionId;
        if (!sessionId) {
            // console.log('AuthService: No sessionId cookie found.');
            return undefined;
        }

        const session = sessions.get(sessionId);
        if (!session) {
            // console.log(`AuthService: No session found for ID: ${sessionId}`);
            return undefined;
        }

        // Check client token expiry (using same buffer as staff token)
        if (Date.now() >= (session.expiresAt - this.TOKEN_EXPIRY_BUFFER_MS)) {
            console.log(`AuthService: Client session expired for ID: ${sessionId}. Expires At: ${session.expiresAt}, Now: ${Date.now()}`);
            sessions.delete(sessionId); // Clean up expired session
            // Ideally, initiate refresh token flow here if session.refreshToken exists
            // For now, just treat as expired
            return undefined;
        }

        // console.log(`AuthService: Found valid client session for ID: ${sessionId}`);
        return session;
    }

    // --- Core Header Logic ---

    /**
     * Determines the appropriate authorization headers based on the request context.
     * Prefers a valid client session token if available, otherwise falls back to
     * ensuring a valid staff token exists (renewing if necessary).
     * Always includes API-Key and SiteId.
     * @param req The incoming Express request object.
     * @returns A promise resolving to the AuthorizationHeaders object.
     */
    public async getAuthorizationHeaders(req?: express.Request): Promise<AuthorizationHeaders> {
        const baseHeaders = {
            'API-Key': this.config.apiKey,
            'SiteId': this.config.siteId,
        };

        let accessToken: string | null = null;
        let tokenType: 'Client' | 'Staff' = 'Staff'; // Default to Staff

        if (req) {
            const clientSession = this.getClientSession(req);
            if (clientSession?.accessToken) {
                accessToken = clientSession.accessToken;
                tokenType = 'Client';
                // console.log(`AuthService: Using Client token for request: ${req.originalUrl || req.url}`);
            }
        }

        // If no valid client token, ensure we have a valid staff token
        if (!accessToken) {
            accessToken = await this.getStaffToken();
            tokenType = 'Staff';
            // console.log(`AuthService: Using Staff token for request.`);
        }

        if (!accessToken) {
            throw new Error('AuthService: Could not obtain a valid access token (Client or Staff).');
        }

        return {
            ...baseHeaders,
            'Authorization': `Bearer ${accessToken}`,
            // Optionally log which token type was used, but avoid logging the token itself
            // 'X-Token-Type': tokenType
        };
    }

    // --- Utility ---
    private _formatAxiosError(error: any): object {
         if (axios.isAxiosError(error)) {
             return {
                 message: error.message,
                 code: error.code,
                 url: error.config?.url,
                 method: error.config?.method,
                 status: error.response?.status,
                 statusText: error.response?.statusText,
                 // responseData: error.response?.data // Avoid logging potentially large/sensitive data
             };
         }
         return { message: error instanceof Error ? error.message : 'Unknown error' };
    }
}

// Singleton instance management (optional, depends on how it's used in index.ts)
let authServiceInstance: AuthService | null = null;

export function initializeAuthService(config: AuthServiceConfig): AuthService {
    if (!authServiceInstance) {
        authServiceInstance = new AuthService(config);
    }
    return authServiceInstance;
}

export function getAuthServiceInstance(): AuthService {
    if (!authServiceInstance) {
        throw new Error("AuthService has not been initialized. Call initializeAuthService first.");
    }
    return authServiceInstance;
} 