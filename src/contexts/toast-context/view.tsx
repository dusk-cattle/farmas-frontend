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

  const toast = useCallback((message: string) => {
    setToastMessage(message);

    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {toastMessage && <Container>{toastMessage}</Container>}
    </ToastContext.Provider>
  );
}
