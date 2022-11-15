import { SubstanceProps } from "../controllers/Substance/types";
import { LocalData } from "../enums";

export function GetSubstancesFromLocalStorage() {
   const item = localStorage.getItem(LocalData.SUBSTANCES_KEY);
   var substances: SubstanceProps = [];
   if (item != null) {
      substances = JSON.parse(item);
   }
   return substances;
}
