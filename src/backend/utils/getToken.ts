import { LocalStorageAdresses } from "../enums/storageEnum";

export function GetUserTokenFromStorage() {
   const item = localStorage.getItem(LocalStorageAdresses.USER);
   var token = " ";
   if (item != null) {
      token = JSON.parse(item)["token"];
   }

   return token;
}
