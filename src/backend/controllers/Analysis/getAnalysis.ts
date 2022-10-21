import axios from "axios";
import { Analysis, SubstanceAnalysisModel } from "./types";
import { LocalData } from "../../enums/localData";
import { Connections } from "../../enums/connections";

export async function GetAnalysis() {
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
      const response = await axios.get<SubstanceAnalysisModel>(Connections.FARMAS + "/SoilAnalysis", config);
      return response;
   } catch (error) {
      return [];
   }
}
