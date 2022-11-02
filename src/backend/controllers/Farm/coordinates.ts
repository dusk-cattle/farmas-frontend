// types
import axios from "axios";
import { Connections } from "../../enums/connections";

import { Point } from "./types";

export async function GetCoordinates(): Promise<Point[]> {
   try {
      const item = localStorage.getItem("user");
      var token = " ";
      if (item != null) {
         token = JSON.parse(item)["token"];
      }
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      const response = await axios.get(Connections.FARMAS + "/farm/Size", config);
      return response.data;
   } catch (error) {
      throw new Error("Error while retrieving Farm coordinates");
   }
}
