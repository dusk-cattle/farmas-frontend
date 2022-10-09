// deps
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// contexts
import { SessionContext } from '../../contexts';

// components
import { Dashboard } from '../../components';

// enums
import { Routes } from '../../enums';

// styles
import { LoadingContainer, Loading } from './styles';

export function Root() {
  const {
    fetch: fetchSession,
    loading: loadingSession,
    data: sessionData,
  } = useContext(SessionContext);

  useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  const navigate = useNavigate();

  useEffect(() => {
    if (loadingSession) return;

    if (!sessionData) navigate(Routes.LOGIN);
  }, [loadingSession, sessionData, navigate]);

  if (loadingSession)
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );

  return <Dashboard />;
}
