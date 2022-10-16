// deps
import { ReactNode } from 'react';

export interface ToastContextValue {
  toast(message: string): void;
}

export interface ToastContextProviderProps {
  children?: ReactNode;
}
