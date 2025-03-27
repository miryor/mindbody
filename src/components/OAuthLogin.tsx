import React from 'react';
import { OAUTH_CONFIG, generateAuthUrl } from '../config/oauth';

export const OAuthLogin: React.FC = () => {
  const handleLogin = () => {
    console.log('OAuth Configuration:', {
      clientId: OAUTH_CONFIG.clientId,
      authorizeUrl: OAUTH_CONFIG.authorizeUrl,
      tokenUrl: OAUTH_CONFIG.tokenUrl,
      redirectUri: OAUTH_CONFIG.redirectUri,
      scope: OAUTH_CONFIG.scope,
      responseType: OAUTH_CONFIG.responseType,
      responseMode: OAUTH_CONFIG.responseMode,
      subscriberId: OAUTH_CONFIG.subscriberId,
      timestamp: new Date().toISOString()
    });

    const authUrl = generateAuthUrl();
    console.log('Generated Mindbody Authorization URL:', {
      url: authUrl,
      timestamp: new Date().toISOString()
    });

    window.location.href = authUrl;
  };

  return (
    <div className="oauth-login">
      <h2>Sign in with Mindbody</h2>
      <button 
        onClick={handleLogin}
        className="mindbody-login-button"
      >
        Sign in with Mindbody
      </button>
      <style>{`
        .oauth-login {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          gap: 1rem;
        }
        .mindbody-login-button {
          background-color: #00A4E3;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .mindbody-login-button:hover {
          background-color: #0093CC;
        }
      `}</style>
    </div>
  );
}; 