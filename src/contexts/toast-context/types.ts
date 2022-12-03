// deps
import { ReactNode } from 'react';

export interface ToastContextValue {
  toast(message: string, type: 'success' | 'error', time?: number): void;
}

export interface ToastContextProviderProps {
  children?: ReactNode;
}

export interface ContainerProps {
  type?: 'success' | 'error';
  time?: number;
}
