import { Point } from "../controllers/Farm/types";
import { LocalData } from "../enums/localData";

export function GetCoordinatesFromLocalStorage() {
   const item = localStorage.getItem(LocalData.COORDINATES_KEY);
   var points: Point[] = [];
   if (item != null) {
      points = JSON.parse(item);
   }
   return points;
}
