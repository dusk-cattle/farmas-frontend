// types
import axios from "axios";

import { Connections } from "../../enums/connections";
import {
  GetCoordinatesFromLocalStorage,
  GetUserTokenFromStorage,
} from "../../utils";

import { PointApi } from "./types";
import { LocalData } from "../../enums";
import { AnalysisServiceWatchdog } from "../Analysis";

export async function GetCoordinates(): Promise<PointApi | undefined> {
  try {
    const online = await AnalysisServiceWatchdog.isAnalysisServiceOnline();
    const token = GetUserTokenFromStorage();
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    if (online) {
      const response = await axios.get<PointApi>(
        Connections.FARMAS + "/farm/Size",
        config
      );
      localStorage.removeItem(LocalData.COORDINATES_KEY);
      localStorage.setItem(
        LocalData.COORDINATES_KEY,
        JSON.stringify(response.data)
      );
      return response.data;
    } else {
      const coordinates = GetCoordinatesFromLocalStorage();
      return coordinates;
    }
  } catch (error) {
    throw new Error("Erro com as coordenadas da fazenda");
  }
}
