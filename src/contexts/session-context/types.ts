// deps
import { ReactNode } from 'react';

// models
import { User } from '../../models';

export interface SessionContextValue {
  user: User | null;
  loading: boolean;
  fetch(): Promise<void>;
}

export interface SessionContextProviderProps {
  children?: ReactNode;
}
