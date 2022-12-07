// types
import axios, { AxiosError } from 'axios';
import { Connections, LocalData } from '../../enums';
import { LoginProps, LoginResponse } from './types';

export async function Login(props: LoginProps) {
  try {
    if (!props.resourceId)
      props.resourceId = '1ba8dbf5-294a-486a-9c4b-88d384f7f12c';

    const { data } = await axios.post<LoginResponse>(
      Connections.GATEKEEPER + '/Session',
      props
    );
    localStorage.setItem(LocalData.USER_KEY, JSON.stringify(data));

    return data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      if (err.response.status === 403) {
        throw new Error('Usuário não existe');
      } else if (err.response.status === 401) {
        throw new Error('Senha incorreta');
      }
    }
  }
}
