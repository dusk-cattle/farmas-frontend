import { GetResourcesProps } from "../controllers/User/types";
import { LocalData } from "../enums/localData";

export function GetResourcesFromLocalStorage() {
   const item = localStorage.getItem(LocalData.RESOURCES_KEY);
   var resources: GetResourcesProps[] = [];
   if (item != null) {
      resources = JSON.parse(item);
   }
   return resources;
}
