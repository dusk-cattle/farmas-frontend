// enums
import { Roles } from '../../enums';

export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Roles;
}

export interface LabelProps {
  checked: boolean;
}
