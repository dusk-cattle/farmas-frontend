// deps
import { createContext, useState, useCallback } from 'react';

// models
import { User } from '../../models';

// usecases
import { getSession } from '../../usecases';

// types
import { SessionContextValue, SessionContextProviderProps } from './types';

const defaultValue: SessionContextValue = {
  user: null,
  loading: false,
  fetch: () => {
    throw new Error('Function not implemented.');
  },
};

export const SessionContext = createContext(defaultValue);

export function SessionContextProvider(props: SessionContextProviderProps) {
  const { children } = props;

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);

    setUser(await getSession());

    setLoading(false);
  }, []);

  return (
    <SessionContext.Provider value={{ user, loading, fetch }}>
      {children}
    </SessionContext.Provider>
  );
}
