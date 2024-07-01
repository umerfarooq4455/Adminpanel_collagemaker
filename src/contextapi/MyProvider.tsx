// MyProvider.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define types for your state
interface State {
  user: { name: string; email: string } | null;
  theme: string;
}

// Define type for context
interface ContextType {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  handleSignIn: () => void;
  handleSignUp: () => void;
  handleSignOut: () => void;
}

// Create context with initial value
const MyContext = createContext<ContextType | undefined>(undefined);

export const useMyContext = (): ContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

// Create provider component
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<State>({
    user: null,
    theme: 'light',
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const authState = localStorage.getItem('isAuthenticated');
    return authState ? JSON.parse(authState) : false;
  });

  const handleSignIn = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <MyContext.Provider value={{ state, setState, isAuthenticated, setIsAuthenticated, handleSignIn, handleSignUp, handleSignOut }}>
      {children}
    </MyContext.Provider>
  );
};
