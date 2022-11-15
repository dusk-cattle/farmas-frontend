import { LocalData } from "../enums";

export function GetUserTokenFromStorage() {
   const item = localStorage.getItem(LocalData.USER_KEY);
   var token = " ";
   if (item != null) {
      token = JSON.parse(item)["token"];
   }

   return token;
}
