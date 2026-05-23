import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for existing session
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      try {
        const data = JSON.parse(storedAuth);
        setIsAuthenticated(true);
        setUser(data.user);
      } catch (e) {
        console.error("Failed to parse auth data", e);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string) => {
    // Simulate API delay for a realistic loading state
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create a dummy user based on email
    const nameFromEmail = email.split('@')[0];
    const capitalizedName = nameFromEmail
      .split(/[\.\-_]/)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
      
    const newUser = {
      name: capitalizedName || 'Farm Guest',
      email,
    };
    
    setIsAuthenticated(true);
    setUser(newUser);
    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, user: newUser }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
