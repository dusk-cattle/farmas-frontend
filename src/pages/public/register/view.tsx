// deps
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// usecases
import { createUser, login } from '../../../usecases';

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

export function RegisterPage() {
  const { register, handleSubmit, watch, formState } = useForm<FormData>({
    mode: 'onChange',
  });

  const password = watch('password');

  const [loading, setLoading] = useState(false);

  function validateEmailFormat(value: string) {
    return (
      !!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)?.length ||
      'E-mail inválido'
    );
  }

  const { toast } = useContext(ToastContext);

  const navigate = useNavigate();

  async function signIn(data: FormData) {
    setLoading(true);

    const { name, email, password } = data;

    try {
      await createUser({ name, email, password });

      const logged = await login({ email, password });

      if (logged) navigate(Routes.ROOT);
      else toast('Não foi possível realizar o login', 'error');
    } catch (error: any) {
      toast(error.message, 'error');
    }

    setLoading(false);
  }

  return (
    <Container onSubmit={handleSubmit(signIn)}>
      <Banner>
        <LeafIcon />
        FARMAS
      </Banner>

      <H1>Bem-vindo!</H1>
      <H2>Cadastre-se para começar a usar</H2>

      <Input
        {...register('name', { required: 'Digite seu nome' })}
        label="Nome"
        placeholder="Digite aqui"
        error={formState.errors.name?.message}
      />
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
      <Input
        {...register('confirmPassword', {
          required: true,
          validate: (value) => value === password || 'As senhas não são iguais',
        })}
        label="Confirme a senha"
        type="password"
        placeholder="Digite aqui"
        error={formState.errors.confirmPassword?.message}
      />

      <Button type="submit" disabled={!formState.isValid || loading}>
        {loading ? '...' : 'Cadastrar'}
      </Button>
      <Span>
        Já possui uma conta? <Link to={Routes.LOGIN}>Entre</Link>
      </Span>
    </Container>
  );
}
