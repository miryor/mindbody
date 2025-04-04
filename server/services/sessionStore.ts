import { Session } from '../types/session';

// In-memory session store
export const sessions = new Map<string, Session>();

/**
 * Get a session by ID
 */
export const getSession = (id: string): Session | undefined => {
  return sessions.get(id);
};

/**
 * Create a new session
 */
export const createSession = (session: Session): void => {
  sessions.set(session.id, session);
};

/**
 * Delete a session
 */
export const deleteSession = (id: string): boolean => {
  return sessions.delete(id);
};

/**
 * Check if a session is valid
 */
export const isSessionValid = (id: string): boolean => {
  const session = sessions.get(id);
  if (!session) {
    return false;
  }
  
  // Check if session is expired
  if (Date.now() > session.expiresAt) {
    sessions.delete(id);
    return false;
  }
  
  return true;
}; 