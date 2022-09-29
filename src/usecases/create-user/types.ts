// enums
import { Roles } from '../../enums';

export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  role: Roles;
}
