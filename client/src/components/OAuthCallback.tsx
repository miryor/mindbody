import React, { useEffect, useState } from 'react';

export const OAuthCallback: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);
  const [clientInfo, setClientInfo] = useState<any>(null);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get session info which includes client info
        const response = await fetch('http://localhost:3001/api/v1/oauth/session', {
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to get session information');
        }

        const data = await response.json();
        setClientInfo(data.clientInfo);
        setStatus('success');

        // Redirect back to the main app after a short delay
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      } catch (err) {
        console.error('OAuth callback error:', err);
        setError(err instanceof Error ? err.message : 'Authentication failed');
        setStatus('error');
      }
    };

    handleCallback();
  }, []);

  return (
    <div className="oauth-callback">
      {status === 'loading' && <p>Processing your login...</p>}
      {status === 'success' && (
        <div>
          <p>Successfully logged in!</p>
          {clientInfo && (
            <div className="client-info">
              <h3>Welcome, {clientInfo.FirstName} {clientInfo.LastName}!</h3>
              <p>Email: {clientInfo.Email}</p>
              <p>Member since: {new Date(clientInfo.CreationDate).toLocaleDateString()}</p>
              <p>Account Balance: ${clientInfo.AccountBalance}</p>
              <p>Available Credits: {clientInfo.AvailableCredits}</p>
              <p>Redirecting to homepage...</p>
            </div>
          )}
        </div>
      )}
      {status === 'error' && <p>Error: {error}</p>}
      <style>{`
        .oauth-callback {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          gap: 1rem;
        }
        .client-info {
          text-align: center;
          margin-top: 1rem;
          padding: 1rem;
          border: 1px solid #eee;
          border-radius: 4px;
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
}; 