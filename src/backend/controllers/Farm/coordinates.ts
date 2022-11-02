// types
import axios from "axios";
import { Connections } from "../../enums/connections";

import { Point } from "./types";

export async function GetCoordinates() {
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
      const response = await axios.get<Point>(Connections.FARMAS + "/Size", config);
      return response.data;
   } catch (error) {
      throw new Error("Error while retrieving Farm coordinates");
   }
}
