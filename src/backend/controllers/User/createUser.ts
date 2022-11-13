import axios, { AxiosError } from "axios";
import { Connections } from "../../enums";
import { CreateUserProps } from "./types";

export async function CreateUser(props: CreateUserProps) {
   try {
      const response = await axios.post(Connections.GATEKEEPER + "/User", props);
      return response.data;
   } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
         if (err.response.status === 403) {
            throw new Error("Usuário já registrado");
         } else {
            throw new Error("Erro ao criar usuário");
         }
      }
   }
}
