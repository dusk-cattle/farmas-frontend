import axios from "axios";
import { AnalysisProps } from "./types";
import { LocalData } from "../../enums/localData";
import { Connections } from "../../enums/connections";
import { GetUserTokenFromStorage } from "../../utils";
import { GetAnalysisFromLocalStorage } from "../../utils/getAnalysisLocalStorage";

export async function GetAnalysis(isOnline: boolean = true): Promise<AnalysisProps> {
   try {
      const token = GetUserTokenFromStorage();
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      if (isOnline) {
         const response = await axios.get(Connections.FARMAS + "/SoilAnalysis", config);
         localStorage.removeItem(LocalData.ANALYSIS_KEY);
         localStorage.setItem(LocalData.ANALYSIS_KEY, JSON.stringify(response.data));
         return response.data;
      } else {
         const analysis = GetAnalysisFromLocalStorage();
         return analysis;
      }
   } catch (error) {
      throw new Error("Erro ao buscar análises de solo");
   }
}
