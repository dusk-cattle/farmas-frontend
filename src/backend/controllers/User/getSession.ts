import axios, { AxiosError } from "axios";
import { Connections } from "../../enums";
import { GetUserTokenFromStorage } from "../../utils";
import { GetSessionProps } from "./types";

export async function GetSession() {
   const token = GetUserTokenFromStorage();
   const config = {
      headers: {
         Authorization: "Bearer " + token,
      },
   };
   try {
      const response = await axios.get<GetSessionProps>(Connections.GATEKEEPER + "/Session", config);
      return response.data;
   } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
         if (err.response.status === 401) {
            throw new Error("Token inválido");
         } else {
            throw new Error("Erro ao retornar dados");
         }
      }
   }
}
