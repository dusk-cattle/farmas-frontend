import axios from "axios";
import { Analysis } from "./types";
import { LocalData } from "../../enums/localData";
import { Connections } from "../../enums/connections";
import { GetUserTokenFromStorage, GetLocalSavedAnalysisFromLocalStorage } from "../../utils";
import isOnline from "is-online";

export async function PostAnalysis(analysis: Analysis) {
   const online = await isOnline();
   const savedAnalysis: Analysis[] = GetLocalSavedAnalysisFromLocalStorage();
   savedAnalysis.push(analysis);
   try {
      if (online) {
         const token = GetUserTokenFromStorage();
         const config = {
            headers: {
               Authorization: "Bearer " + token,
            },
         };

         savedAnalysis.forEach(async (element) => {
            await axios.post(Connections.FARMAS + "/SoilAnalysis", element, config);
         });
         localStorage.removeItem(LocalData.ANALYSIS__SYNC_KEY);
      } else {
         localStorage.setItem(LocalData.ANALYSIS__SYNC_KEY, JSON.stringify(savedAnalysis));
      }

      return true;
   } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar Análise");
   }
}
