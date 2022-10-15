import axios from "axios";
import { Connections } from "../../enums";
import { GetSessionProps } from "./types";

export async function GetSession() {
   const item = localStorage.getItem("user");
   if (item != null) {
      const token = JSON.parse(item)["token"];
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      try {
         const response = await axios.get<GetSessionProps>(Connections.GATEKEEPER + "/Session", config);
         return response.data;
      } catch (error) {
         return null;
      }
   } else {
      return null;
   }
}
