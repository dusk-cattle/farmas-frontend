// deps
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../../backend';

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
  const { register, handleSubmit } = useForm<FormData>();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function signIn(data: FormData) {
    setLoading(true);

    const { email, password } = data;
    const success = await Login({ email, password });

    if (success) navigate(Routes.ROOT);

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

      <Input {...register('email')} label="E-mail" />
      <Input {...register('password')} label="Senha" type="password" />

      <Button disabled={loading} type="submit">
        {loading ? '...' : 'Entrar'}
      </Button>
      <Span>
        Ainda não possui uma conta?{' '}
        <Link to={Routes.REGISTER}>Registre-se</Link>
      </Span>
    </Container>
  );
}
