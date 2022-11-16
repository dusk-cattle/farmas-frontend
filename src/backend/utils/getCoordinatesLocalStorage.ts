import { PointApi } from "../controllers/Farm/types";
import { LocalData } from "../enums/localData";

export function GetCoordinatesFromLocalStorage(): PointApi | undefined {
   const item = localStorage.getItem(LocalData.COORDINATES_KEY);

   if (item != null) {
      return JSON.parse(item);
   }
}
