// enums
import { Roles } from '../enums';

export interface Session {
  user: { id: string; name: string; email: string };
  resource: { id: string; name: string };
  role: Roles;
}
