// backend
import { Login } from '../../backend';

// types
import { LoginProps } from './types';

export async function login(props: LoginProps) {
  const { email, password } = props;

  return Login({ email, password });
}
