import axios, { AxiosError } from "axios";

import { Connections, LocalData } from "../../enums";
import { GetUserTokenFromStorage } from "../../utils";
import { GetResourcesProps } from "./types";
import isOnline from "is-online";
import { GetResourcesFromLocalStorage } from "../../utils/getResourcesLocalStorage";
export async function GetResources() {
   const token = GetUserTokenFromStorage();
   const online = await isOnline();
   const config = {
      headers: {
         Authorization: "Bearer " + token,
      },
   };

   try {
      if (online) {
         const response = await axios.get<GetResourcesProps[]>(Connections.GATEKEEPER + "/Resource", config);
         localStorage.removeItem(LocalData.RESOURCES_KEY);
         localStorage.setItem(LocalData.RESOURCES_KEY, JSON.stringify(response.data));
         return response.data;
      } else {
         const resources = GetResourcesFromLocalStorage();
         return resources;
      }
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
