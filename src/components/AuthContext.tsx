import React, { createContext, ReactNode, useContext, useState } from 'react';
import { LoginData } from './Interfaces/interface';

interface AuthContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login: (userData: LoginData) => Promise<{ success: boolean, error?: string }>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = async (data: any) => {

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (response.ok) {
        setUser(res);
        // setUser(userData);
        return { success: true };
      } else {
        // Handle specific error cases
        if (res === 'User does not exist!') {
          return { success: false, error: 'User does not exist. Please try again.' };
        }
        if (res === 'email or password is wrong.') {
          return { success: false, error: 'Wrong credentials: invalid username or password.' };
        }
        return { success: false, error: 'An unknown error occurred. Please try again later.' };
      }

    } catch (error) {
      console.error('Login Error:', error);
      return { success: false, error: 'Failed to connect to the server. Please try again.' };
    }
    
  };

  const logout = () => {
    // Implement logout logic here
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
