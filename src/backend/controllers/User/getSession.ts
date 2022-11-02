import axios, { AxiosError } from "axios";
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
         const err = error as AxiosError;
         if (err.response) {
            if (err.response.status === 401) {
               throw new Error("User Token is not valid");
            } else {
               throw new Error("Something went wrong while retrieving data");
            }
         }
      }
   } else {
      throw new Error("Something went wrong while retrieving data");
   }
}
