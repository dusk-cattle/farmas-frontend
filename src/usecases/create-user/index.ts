// types
import { CreateUserProps } from './types';

export async function createUser(props: CreateUserProps) {
  return await new Promise<boolean>((resolve) => {
    const ms = 1;
    const s = 1000 * ms;

    setTimeout(() => {
      return resolve(true);
    }, 1 * s);
  });
}
