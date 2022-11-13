import axios from "axios";
import { Analysis } from "./types";
import { LocalData } from "../../enums/localData";
import { Connections } from "../../enums/connections";

export async function PostAnalysis(analysis: Analysis, isOnline: Boolean) {
  try {
    if (isOnline) {
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

      console.log(analysis);

      const response = await axios.post(
        Connections.FARMAS + "/SoilAnalysis",
        analysis,
        config
      );
      return true;
    } else {
      localStorage.setItem(LocalData.ANALYSIS_KEY, JSON.stringify(analysis));
      return true;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error while trying to submit analysis");
  }
}
