// deps
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// usecases
import { login } from '../../../usecases';

// contexts
import { ToastContext } from '../../../contexts';

// enums
import { Routes } from '../../../enums';

// styles
import {
  Container,
  Banner,
  LeafIcon,
  H1,
  H2,
  Input,
  Button,
  Span,
  Link,
} from '../styles';

// types
import { FormData } from './types';

export function LoginPage() {
  const { register, handleSubmit, formState } = useForm<FormData>({
    mode: 'onChange',
  });

  const [loading, setLoading] = useState(false);

  function validateEmailFormat(value: string) {
    return (
      !!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)?.length ||
      'E-mail inválido'
    );
  }

  const navigate = useNavigate();

  const { toast } = useContext(ToastContext);

  async function signIn(data: FormData) {
    setLoading(true);

    const { email, password } = data;
    const success = await login({ email, password });

    if (success) navigate(Routes.ROOT);
    else toast('Não foi possível realizar o login');

    setLoading(false);
  }

  return (
    <Container onSubmit={handleSubmit(signIn)}>
      <Banner>
        <LeafIcon />
        FARMAS
      </Banner>

      <H1>Bem-vindo de volta!</H1>
      <H2>Entre para usar a plataforma</H2>

      <Input
        {...register('email', {
          required: 'Digite seu e-mail',
          validate: validateEmailFormat,
        })}
        label="E-mail"
        placeholder="Digite aqui"
        error={formState.errors.email?.message}
      />
      <Input
        {...register('password', { required: 'Digite sua senha' })}
        label="Senha"
        type="password"
        placeholder="Digite aqui"
        error={formState.errors.password?.message}
      />

      <Button disabled={!formState.isValid || loading} type="submit">
        {loading ? '...' : 'Entrar'}
      </Button>
      <Span>
        Ainda não possui uma conta?{' '}
        <Link to={Routes.REGISTER}>Registre-se</Link>
      </Span>
    </Container>
  );
}
