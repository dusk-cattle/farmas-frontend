// enums
import { Roles } from "../../../enums/roles";

export interface CreateUserProps {
   name: string;
   email: string;
   password: string;
   role: Roles;
}

export interface LoginProps {
   email: string;
   password: string;
}
