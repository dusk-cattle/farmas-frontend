import axios from "axios";
import { AnalysisProps } from "./types";
import { LocalData } from "../../enums/localData";
import { Connections } from "../../enums/connections";
import { GetAnalysisFromLocalStorage, GetUserTokenFromStorage } from "../../utils";
import isOnline from "is-online";

export async function GetAnalysis(): Promise<AnalysisProps> {
   const online = await isOnline();
   try {
      const token = GetUserTokenFromStorage();
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      if (online) {
         const response = await axios.get(Connections.FARMAS + "/SoilAnalysis", config);
         localStorage.removeItem(LocalData.ANALYSIS_KEY);
         localStorage.setItem(LocalData.ANALYSIS_KEY, JSON.stringify(response.data));
         console.log("chamou analises online");
         console.log(response.data);
         return response.data;
      } else {
         console.log("chamou analises ofline");
         const analysis = GetAnalysisFromLocalStorage();
         console.log(analysis);
         return analysis;
      }
   } catch (error) {
      throw new Error("Erro ao buscar análises de solo");
   }
}
