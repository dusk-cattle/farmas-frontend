import { LocalData } from "../enums";
import { ReporterProps } from "../controllers/Reporter/types";

export function GetReportsFromLocalStorage(): ReporterProps[] {
   const item = localStorage.getItem(LocalData.REPORTS_KEY);
   var reports: ReporterProps[] = [];
   if (item != null) {
      reports = JSON.parse(item);
   }
   return reports;
}
