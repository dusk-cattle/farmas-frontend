// enums
import { Roles } from '../../../enums/roles';

export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

export interface LoginProps {
  email: string;
  password: string;
  resourceId?: string;
}

export interface LoginResponse {
  id: string;
  name: string;
  password: string;
}

export interface GetSessionProps {
  user: { id: string; name: string; email: string };
  resource: { id: string; name: string; ownerRole: string };
  role: string;
}

export interface GiveRoleProps {
  role: string;
  thirdUserEmail: string;
  resourceId?: string;
}

export interface GetResourcesProps {
  id: string;
  name: string;
  adminRole: string;
}
