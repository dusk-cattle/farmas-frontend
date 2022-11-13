import axios, { AxiosError } from "axios";
import { Connections } from "../../enums";
import { GetUserTokenFromStorage } from "../../utils";
import { GiveRoleProps } from "./types";

export async function GiveRole(giveRoleProps: GiveRoleProps) {
   const token = GetUserTokenFromStorage();
   if (token == " ") {
      throw new Error("Erro ao recuperar dados");
   }
   const config = {
      headers: {
         Authorization: "Bearer " + token,
      },
   };

   try {
      await axios.post(Connections.GATEKEEPER + "/Role", giveRoleProps, config);
   } catch (error) {
      handleGiveRoleError(error as AxiosError);
   }
}

function handleGiveRoleError(error: AxiosError) {
   const status = error?.response?.status;

   let message = "";
   switch (status) {
      case 401:
         message = "Usuário não autenticado, ou não possui uma fazenda";
         break;

      case 403:
         message = "O usuário não existe ou ja existe uma função para ele"; //"The user who's role is being assigned to does not exist or the user has already a role in it";
         break;

      default:
         message = "Erro genérico ocorreu";
         break;
   }

   throw new Error(message);
}
