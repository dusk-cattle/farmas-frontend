// types
import axios from "axios";
import { Connections } from "../../enums/connections";
import { GetUserTokenFromStorage } from "../../utils";

import { PointApi } from "./types";

export async function GetCoordinates(): Promise<PointApi> {
   try {
      const token = GetUserTokenFromStorage();
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      const response = await axios.get<PointApi>(Connections.FARMAS + "/farm/Size", config)
      return response.data;
   } catch (error) {
      throw new Error("Erro com as coordenadas da fazenda");
   }
}
