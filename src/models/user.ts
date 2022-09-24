// enums
import { Roles } from '../enums';

export interface User {
  id: string;
  name: string;
  role: Roles;
  farmID: string;
}
