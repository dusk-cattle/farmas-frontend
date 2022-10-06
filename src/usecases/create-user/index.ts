// backend
import { CreateUser } from '../../backend';

// types
import { CreateUserProps } from './types';

export async function createUser(props: CreateUserProps) {
  const { name, email, password, role } = props;

  return await CreateUser({
    name,
    email,
    password,
    role,
  });
}
