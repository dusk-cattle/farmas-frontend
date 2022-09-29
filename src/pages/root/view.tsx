// deps
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// contexts
import { SessionContext } from '../../contexts';

// components
import { Dashboard } from '../../components';

// enums
import { Routes } from '../../enums';

export function Root() {
  const {
    fetch: fetchSession,
    loading: loadingSession,
    user: sessionUser,
  } = useContext(SessionContext);

  useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  const navigate = useNavigate();

  useEffect(() => {
    if (loadingSession) return;

    if (!sessionUser) navigate(Routes.LOGIN);
  }, [loadingSession, sessionUser, navigate]);

  if (loadingSession) return <div>carregando...</div>;

  return <Dashboard />;
}
