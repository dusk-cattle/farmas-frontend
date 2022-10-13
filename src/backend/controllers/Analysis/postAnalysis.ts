import axios from "axios";
import { Analysis } from "./types";
import { LocalData } from "../../enums/localData";

export async function PostAnalysis(analysis: Analysis, isOnline: Boolean) {
   try {
      if (isOnline) {
         const item = localStorage.getItem("user");
         var token = " ";
         if (item != null) {
            token = JSON.parse(item)["token"];
         }
         const config = {
            headers: {
               Authorization: "Bearer " + token,
            },
         };
         const response = await axios.post("http://localhost:5090/api/SoilAnalysis", analysis, config);
         return true;
      } else {
         localStorage.setItem(LocalData.ANALYSIS_KEY, JSON.stringify(analysis));
         return true;
      }
   } catch (error) {
      return false;
   }
}
