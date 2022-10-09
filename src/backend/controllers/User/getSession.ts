import axios from "axios";
import { GetSessionProps } from "./types";

export async function getSession() {
   const item = localStorage.getItem("user");
   if (item != null) {
      const token = JSON.parse(item)["token"];
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      try {
         const response = await axios.get<GetSessionProps>("http://localhost:4000/api/Session", config);
         return response.data;
      } catch (error) {
         return null;
      }
   } else {
      return null;
   }
}
