// types
import axios from "axios";
import { Connections } from "../../enums/connections";
import { GetCoordinatesFromLocalStorage, GetUserTokenFromStorage } from "../../utils";
import isOnline from "is-online";
import { Point } from "./types";
import { LocalData } from "../../enums";

export async function GetCoordinates(): Promise<Point[]> {
   try {
      const online = await isOnline();
      const token = GetUserTokenFromStorage();
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      if (online) {
         const response = await axios.get(Connections.FARMAS + "/farm/Size", config);
         localStorage.removeItem(LocalData.COORDINATES_KEY);
         localStorage.setItem(LocalData.COORDINATES_KEY, JSON.stringify(response.data));
         return response.data;
      } else {
         const coordinates = GetCoordinatesFromLocalStorage();
         return coordinates;
      }
   } catch (error) {
      throw new Error("Erro com as coordenadas da fazenda");
   }
}
