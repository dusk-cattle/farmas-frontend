import axios from 'axios';
import { CreateUserProps } from './types';

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export async function CreateUser(props: CreateUserProps) {
  return await new Promise<boolean>((resolve) => {
    const ms = 1;
    const s = 1000 * ms;
    console.log(props);
    try {
      const teste = {
        name: 'usuario',
        email: 'usuarioteste@email.com',
        password: '12345',
      };
      axios
        .post('http://localhost:4000/api/User', props, axiosConfig)
        .then((response) => {
          console.log(response.data);
          setTimeout(() => {
            return resolve(response.data);
          }, 1 * s);
        });
    } catch (error) {
      setTimeout(() => {
        return resolve(false);
      }, 1 * s);
    }
  });
}
