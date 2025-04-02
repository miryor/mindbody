import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { SchedulerWidget } from './widgets/SchedulerWidget';
import { RetailWidget } from './widgets/RetailWidget';
import { OAuthCallback } from './components/OAuthCallback';
import { OAuthLogin } from './components/OAuthLogin';
import { AdminCustomerForm } from './components/AdminCustomerForm';
import { PasswordResetForm } from './components/PasswordResetForm';
import { authService } from './services/authService';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await authService.checkSession();
      setIsAuthenticated(authenticated);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [clientInfo, setClientInfo] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await authService.checkSession();
      setIsAuthenticated(authenticated);
      if (authenticated) {
        const info = authService.getClientInfo();
        console.log('Client info:', info);
        setClientInfo(info);
      }
    };
    checkAuth();
  }, []);

  const getLogoutUrl = () => {
    console.log('Getting logout URL, clientInfo:', clientInfo);
    if (!clientInfo?.IdToken) {
      console.log('No ID token found in clientInfo');
      return '#';
    }
    const endsessionUrl = new URL('https://signin.mindbodyonline.com/connect/endsession');
    endsessionUrl.searchParams.append('id_token_hint', clientInfo.IdToken);
    endsessionUrl.searchParams.append('post_logout_redirect_uri', 'https://redirectmeto.com/http://localhost:3001/api/v1/oauth/logout-callback');
    const url = endsessionUrl.toString();
    console.log('Generated logout URL:', url);
    return url;
  };

  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {isAuthenticated ? (
              <>
                <li><Link to="/scheduler">Scheduler</Link></li>
                <li><Link to="/retail">Shop</Link></li>
                <li><Link to="/giftcards">Gift Cards</Link></li>
                <li><a href={getLogoutUrl()} className="logout-button">Logout</a></li>
              </>
            ) : null}
            <li><Link to="/admin/customer">Add Client</Link></li>
            <li><Link to="/admin/password-reset">Reset Password</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            isAuthenticated ? (
              <Navigate to="/scheduler" replace />
            ) : (
              <div>
                <h1>Mindbody Widgets</h1>
                <OAuthLogin />
              </div>
            )
          } />
          <Route path="/scheduler" element={
            <ProtectedRoute>
              <SchedulerWidget />
            </ProtectedRoute>
          } />
          <Route path="/retail" element={
            <ProtectedRoute>
              <RetailWidget showGiftCards={false} />
            </ProtectedRoute>
          } />
          <Route path="/giftcards" element={
            <ProtectedRoute>
              <RetailWidget showGiftCards={true} />
            </ProtectedRoute>
          } />
          <Route path="/oauth/callback" element={<OAuthCallback />} />
          <Route path="/admin/customer" element={<AdminCustomerForm />} />
          <Route path="/admin/password-reset" element={<PasswordResetForm />} />
        </Routes>

        <style>{`
          .app {
            padding: 2rem;
          }
          nav {
            margin-bottom: 2rem;
          }
          nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            gap: 1rem;
            align-items: center;
          }
          nav a {
            color: #00A4E3;
            text-decoration: none;
            font-weight: 500;
          }
          nav a:hover {
            text-decoration: underline;
          }
          .logout-button {
            background: none;
            border: none;
            color: #00A4E3;
            font-weight: 500;
            cursor: pointer;
            padding: 0;
            font-size: 1rem;
            text-decoration: none;
          }
          .logout-button:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    </BrowserRouter>
  );
}; 