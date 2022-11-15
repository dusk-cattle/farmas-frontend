// types
import axios from "axios";
import { LocalData } from "../../enums";
import { Connections } from "../../enums/connections";
import { GetUserTokenFromStorage } from "../../utils";
import { GetSubstancesFromLocalStorage } from "../../utils/getSubstancesLocalStorage";
import { SubstanceProps } from "./types";

export async function GetSubstances(isOnline: boolean = true): Promise<SubstanceProps> {
   try {
      const token = GetUserTokenFromStorage();
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      if (isOnline) {
         const response = await axios.get(Connections.FARMAS + "/SubstanceRegistry", config);
         localStorage.removeItem(LocalData.SUBSTANCES_KEY);
         localStorage.setItem(LocalData.SUBSTANCES_KEY, JSON.stringify(response.data));
         return response.data;
      } else {
         const localSubstances: SubstanceProps = GetSubstancesFromLocalStorage();
         return localSubstances;
      }
   } catch (error) {
      throw new Error("Erro ao buscar substancias");
   }
}
