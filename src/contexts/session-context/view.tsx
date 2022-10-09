// deps
import { createContext, useState, useCallback } from 'react';

// models
import { Session } from '../../models';

// usecases
import { getSession } from '../../usecases';

// types
import { SessionContextValue, SessionContextProviderProps } from './types';

const defaultValue: SessionContextValue = {
  data: null,
  loading: false,
  fetch: () => {
    throw new Error('Function not implemented.');
  },
};

export const SessionContext = createContext(defaultValue);

export function SessionContextProvider(props: SessionContextProviderProps) {
  const { children } = props;

  const [data, setData] = useState<Session | null>(null);

  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);

    setData(await getSession());

    setLoading(false);
  }, []);

  return (
    <SessionContext.Provider value={{ data, loading, fetch }}>
      {children}
    </SessionContext.Provider>
  );
}
