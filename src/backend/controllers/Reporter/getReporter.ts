import axios, { AxiosError } from "axios";
import { Connections } from "../../enums/connections";
import {
  GetReportsFromLocalStorage,
  GetUserTokenFromStorage,
} from "../../utils";
import { ReporterProps } from "./types";
import { LocalData } from "../../enums/localData";
import { isReportServiceOnline } from "../../contexts";

export async function GetReporter(): Promise<ReporterProps[]> {
  try {
    const online = await isReportServiceOnline();
    const token = GetUserTokenFromStorage();
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    if (online) {
      const response = await axios.get(
        Connections.REPORTER + "/SoilReports",
        config
      );
      localStorage.removeItem(LocalData.REPORTS_KEY);
      localStorage.setItem(
        LocalData.REPORTS_KEY,
        JSON.stringify(response.data)
      );
      return response.data;
    } else {
      const reports = GetReportsFromLocalStorage();
      console.log(reports);
      return reports;
    }
  } catch (error) {
    throw new Error("Erro ao gerar relatórios da Fazenda");
  }
}
