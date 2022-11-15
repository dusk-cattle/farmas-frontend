import { AnalysisProps } from "../controllers/Analysis/types";
import { SubstanceProps } from "../controllers/Substance/types";
import { LocalData } from "../enums";

export function GetAnalysisFromLocalStorage() {
   const item = localStorage.getItem(LocalData.ANALYSIS_KEY);
   var analysis: AnalysisProps = [];
   if (item != null) {
      analysis = JSON.parse(item);
   }
   return analysis;
}
