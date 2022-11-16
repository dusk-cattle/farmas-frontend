import { Analysis } from "../controllers/Analysis/types";
import { LocalData } from "../enums";

export function GetLocalSavedAnalysisFromLocalStorage(): Analysis[] {
   const item = localStorage.getItem(LocalData.ANALYSIS__SYNC_KEY);
   var analysis: Analysis[] = [];
   if (item != null) {
      analysis = JSON.parse(item);
   }
   return analysis;
}
