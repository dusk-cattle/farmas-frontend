import axios from "axios";
import { Analysis } from "./types";
import { LocalData } from "../../enums/localData";
import { Connections } from "../../enums/connections";
import { GetUserTokenFromStorage } from "../../utils";

export async function PostAnalysis(analysis: Analysis, isOnline: Boolean) {
   try {
      if (isOnline) {
         const token = GetUserTokenFromStorage();
         const config = {
            headers: {
               Authorization: "Bearer " + token,
            },
         };
         return true;
      } else {
         localStorage.setItem(LocalData.ANALYSIS_KEY, JSON.stringify(analysis));
         return true;
      }
   } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar Análise");
   }
}
