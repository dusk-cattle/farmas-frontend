import axios from "axios";
import { AnalysisProps } from "./types";
import { LocalData } from "../../enums/localData";
import { Connections } from "../../enums/connections";

export async function GetAnalysis(): Promise<AnalysisProps> {
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
      const response = await axios.get(Connections.FARMAS + "/SoilAnalysis", config);
      return response.data;
   } catch (error) {
      throw new Error();
   }
}
