import axios from "axios";
import { Analysis } from "./types";
import { LocalData } from "../../enums/localData";
import { Connections } from "../../enums/connections";
import { GetUserTokenFromStorage } from "../../utils";
import isOnline from "is-online";

export async function PostAnalysis(analysis: Analysis) {
   const online = await isOnline();
   try {
      if (online) {
         const token = GetUserTokenFromStorage();
         const config = {
            headers: {
               Authorization: "Bearer " + token,
            },
         };

         await axios.post(Connections.FARMAS + "/SoilAnalysis", analysis, config);

         return true;
      } else {
         localStorage.setItem(LocalData.ANALYSIS__SYNC_KEY, JSON.stringify(analysis));
         return true;
      }
   } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar Análise");
   }
}
