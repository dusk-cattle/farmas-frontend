// deps
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// usecases
import { login } from '../../usecases';

// enums
import { Routes } from '../../enums';

// styles
import { Container, Banner, H1, H2, Input, Button, Span, Link } from './styles';

// types
import { FormData } from './types';

export function LoginPage() {
  const { register, handleSubmit } = useForm<FormData>();

  const [, setLoading] = useState(false);

  const navigate = useNavigate();

  async function signIn(data: FormData) {
    setLoading(true);

    const { email, password } = data;

    const success = await login({ email, password });

    if (success) navigate(Routes.ROOT);

    setLoading(false);
  }

  return (
    <Container onSubmit={handleSubmit(signIn)}>
      <Banner />

      <H1>Bem-vindo!</H1>
      <H2>Cadastre-se para começar a usar</H2>

      <Input {...register('email')} label="E-mail" />
      <Input {...register('password')} label="Senha" type="password" />

      <Button type="submit">Entrar</Button>
      <Span>
        Ainda não possui uma conta?{' '}
        <Link to={Routes.REGISTER}>Registre-se</Link>
      </Span>
    </Container>
  );
}
