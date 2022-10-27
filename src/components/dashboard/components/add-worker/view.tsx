// deps
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

// usecases
import { associateWorker } from '../../../../usecases';

// contexts
import { ToastContext } from '../../../../contexts';

// components
import { Input } from '../../..';

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

  async function addWorker(data: FormData) {
    try {
      await associateWorker(data.email);

      toast('Operador adicionado com sucesso!', 'success');

      onClickBack?.();
    } catch (e) {
      toast('Ocorreu um erro ap tentar adicionar o operador', 'error');
    }
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={onClickBack}>
          <BackIcon />
        </BackButton>
        <Title>Adicionar Operador</Title>
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
        />

        <SubmitButton disabled={!formState.isValid} type="submit">
          Adicionar
        </SubmitButton>
      </Form>
    </Container>
  );
}
