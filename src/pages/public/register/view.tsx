// deps
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// usecases
import { createUser, login } from '../../../usecases';

// enums
import { Roles, Routes } from '../../../enums';

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
import { RadioGroup, Radio, Label } from './styles';

// types
import { FormData } from './types';

export function RegisterPage() {
  const { register, handleSubmit, watch } = useForm<FormData>();

  const role = watch('role');

  const [, setLoading] = useState(false);

  const navigate = useNavigate();

  async function signIn(data: FormData) {
    setLoading(true);

    const { name, email, password, role } = data;

    const createdUser = await createUser({ name, email, password, role });

    if (createdUser) {
      const logged = await login({ email, password });

      if (logged) navigate(Routes.ROOT);
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

      <Input {...register('name')} label="Nome" />
      <Input {...register('email')} label="E-mail" />
      <Input {...register('password')} label="Senha" type="password" />
      <Input
        {...register('confirmPassword')}
        label="Confirme a senha"
        type="password"
      />

      <RadioGroup>
        <Label checked={role === Roles.OWNER}>
          <Radio {...register('role')} value={Roles.OWNER} />
          Sou dono
        </Label>
        <Label checked={role === Roles.WORKER}>
          <Radio {...register('role')} value={Roles.WORKER} />
          Sou operador
        </Label>
      </RadioGroup>

      <Button type="submit">Cadastrar</Button>
      <Span>
        Já possui uma conta? <Link to={Routes.LOGIN}>Entre</Link>
      </Span>
    </Container>
  );
}
