// deps
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// usecases
import { associateWorker } from '../../../../usecases';

// contexts
import { SessionContext, ToastContext } from '../../../../contexts';

// components
import { Input, WarnIcon } from '../../..';

// styles
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Title,
  Form,
  SubmitButton,
} from './styles';

// types
import { AddWorkerProps, FormData } from './types';
import { useWatchdog } from '../../../../backend';

export function AddWorker(props: AddWorkerProps) {
  const { onClickBack } = props;

  const { handleSubmit, register, formState } = useForm<FormData>({
    mode: 'onChange',
  });

  function validateEmailFormat(value: string) {
    return (
      !!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)?.length ||
      'E-mail inválido'
    );
  }

  const { toast } = useContext(ToastContext);

  const { data: sessionData } = useContext(SessionContext);

  async function addWorker(data: FormData) {
    try {
      await associateWorker(data.email, sessionData?.resource?.id);

      toast('Operador adicionado com sucesso!', 'success');

      onClickBack?.();
    } catch (e) {
      toast('Ocorreu um erro ap tentar adicionar o operador', 'error');
    }
  }

  const { isAuthOnline: isOnline } = useWatchdog();

  const offlineMessage =
    'Não é possível adicionar operadores enquanto você está sem internet.';

  useEffect(() => {
    if (!isOnline) toast(offlineMessage, 'error', 6000);
  }, [isOnline]);

  return (
    <Container>
      <Header>
        <BackButton onClick={onClickBack}>
          <BackIcon />
        </BackButton>
        <Title>Adicionar Operador</Title>

        {!isOnline && <WarnIcon message={offlineMessage} />}
      </Header>

      <Form onSubmit={handleSubmit(addWorker)}>
        <Input
          {...register('email', {
            required: true,
            validate: validateEmailFormat,
          })}
          label="E-mail"
          placeholder="operador@exemplo.com"
          error={formState.errors.email?.message}
          style={
            !isOnline
              ? {
                  pointerEvents: 'none',
                }
              : {}
          }
        />

        <SubmitButton disabled={!formState.isValid} type="submit">
          Adicionar
        </SubmitButton>
      </Form>
    </Container>
  );
}
