// deps
import { createContext, useCallback, useState } from 'react';

// styles
import { Container } from './styles';

// types
import { ToastContextValue, ToastContextProviderProps } from './types';

const defaultValue: ToastContextValue = {
  toast: () => {
    throw new Error('Function not implemented.');
  },
};

export const ToastContext = createContext(defaultValue);

export function ToastContextProvider(props: ToastContextProviderProps) {
  const { children } = props;

  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>();

  const toast = useCallback((message: string, type: 'success' | 'error') => {
    setToastMessage(message);
    setToastType(type);

    setTimeout(() => {
      setToastMessage('');
      setToastType(undefined);
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {toastMessage && <Container type={toastType}>{toastMessage}</Container>}
    </ToastContext.Provider>
  );
}
