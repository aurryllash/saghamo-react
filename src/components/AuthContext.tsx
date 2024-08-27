import React, { createContext, ReactNode, useContext, useState } from 'react';
import { LoginData } from './Interfaces/interface';

interface AuthContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: string;
  login: (userData: LoginData) => Promise<{ success: boolean, error?: string }>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string>('');

  const login = async (data: LoginData) => {

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
        setUser(res.token);
        return { success: true };
      } else {

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
    setUser('');
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
