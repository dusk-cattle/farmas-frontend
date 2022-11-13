import axios from "axios";
import { AnalysisProps } from "./types";
import { LocalData } from "../../enums/localData";
import { Connections } from "../../enums/connections";
import { GetUserTokenFromStorage } from "../../utils";

export async function GetAnalysis(): Promise<AnalysisProps> {
   try {
      const token = GetUserTokenFromStorage();
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      const response = await axios.get(Connections.FARMAS + "/SoilAnalysis", config);
      return response.data;
   } catch (error) {
      throw new Error("Erro ao buscar análises de solo");
   }
}
