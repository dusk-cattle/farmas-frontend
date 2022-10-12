import axios from "axios";
import { Analysis } from "./types";
import { LocalData } from "../../enums/localData";

let axiosConfig = {
   headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
   },
};
export async function PostAnalysis(analysis: Analysis, isOnline: Boolean) {
   try {
      if (isOnline) {
         const response = await axios.post("http://localhost:5000/SoilAnalysis", analysis, axiosConfig);
         return true;
      } else {
         localStorage.setItem(LocalData.ANALYSIS_KEY, JSON.stringify(analysis));
         return true;
      }
   } catch (error) {
      return false;
   }
}
