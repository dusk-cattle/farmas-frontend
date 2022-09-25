// types
import { LoginProps } from './types';

export async function login(props: LoginProps) {
  return await new Promise<boolean>((resolve) => {
    const ms = 1;
    const s = 1000 * ms;

    setTimeout(() => {
      return resolve(true);
    }, 1 * s);
  });
}
