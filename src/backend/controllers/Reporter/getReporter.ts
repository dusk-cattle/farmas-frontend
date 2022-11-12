import axios, { AxiosError } from "axios";
import { Connections } from "../../enums/connections";
import { mockReports } from "./mock";
import { ReporterProps } from "./types";

export async function GetReporter(): Promise<ReporterProps[]> {
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

    const response = await axios.get(
      Connections.REPORTER + "/SoilReports",
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while retrieving farm");
  }
}
