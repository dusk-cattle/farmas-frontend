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
  const [toastTime, setToastTime] = useState<number>();

  const toast = useCallback(
    (message: string, type: 'success' | 'error', time: number = 3000) => {
      setToastMessage(message);
      setToastType(type);
      setToastTime(time);

      setTimeout(() => {
        setToastMessage('');
        setToastType(undefined);
      }, time);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {toastMessage && (
        <Container type={toastType} time={toastTime}>
          {toastMessage}
        </Container>
      )}
    </ToastContext.Provider>
  );
}
