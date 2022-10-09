// deps
import { ReactNode } from 'react';

// models
import { Session } from '../../models';

export interface SessionContextValue {
  data: Session | null;
  loading: boolean;
  fetch(): Promise<void>;
}

export interface SessionContextProviderProps {
  children?: ReactNode;
}
