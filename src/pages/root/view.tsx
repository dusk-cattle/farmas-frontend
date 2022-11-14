// deps
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// contexts
import { SessionContext, ToastContext } from '../../contexts';

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

  const { toast } = useContext(ToastContext);

  useEffect(() => {
    try {
      fetchSession();
    } catch (error: any) {
      console.log(error);
      toast(error.message, 'error');
    }
  }, [fetchSession, toast]);

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
