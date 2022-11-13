// types
import axios from "axios";
import { Connections } from "../../enums/connections";
import { GetUserTokenFromStorage } from "../../utils";
import { SubstanceProps } from "./types";

export async function GetSubstances(): Promise<SubstanceProps> {
   try {
      const token = GetUserTokenFromStorage();
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      const response = await axios.get(Connections.FARMAS + "/SubstanceRegistry", config);
      return response.data;
   } catch (error) {
      throw new Error("Erro ao buscar substancias");
   }
}
