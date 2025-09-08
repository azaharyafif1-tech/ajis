import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { authAPI } from '../api';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isFreelancer: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'REGISTER_START' }
  | { type: 'REGISTER_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'REGISTER_FAILURE'; payload: string };

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
    case 'REGISTER_START':
      return { ...state, isLoading: true, error: null };
    
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        error: null,
      };
    
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      return {
        ...state,
        user: null,
        token: null,
        isLoading: false,
        error: action.payload,
      };
    
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        token: null,
        isLoading: false,
        error: null,
      };
    
    default:
      return state;
  }
};

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isFreelancer?: boolean;
  }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const response = await authAPI.login(email, password);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: response.data.user,
          token: response.data.token,
        },
      });
    } catch (error: any) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.response?.data?.error || 'Login failed',
      });
    }
  };

  const register = async (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isFreelancer?: boolean;
  }) => {
    dispatch({ type: 'REGISTER_START' });
    try {
      const response = await authAPI.register(userData);
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: {
          user: response.data.user,
          token: response.data.token,
        },
      });
    } catch (error: any) {
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: error.response?.data?.error || 'Registration failed',
      });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // Check if user is already logged in on app start
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !state.user) {
      // You could add a function to verify token and get user data
      // For now, we'll just assume the token is valid
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};