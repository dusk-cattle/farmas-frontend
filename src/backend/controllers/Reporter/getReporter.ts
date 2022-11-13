import axios, { AxiosError } from "axios";
import { Connections } from "../../enums/connections";
import { GetUserTokenFromStorage } from "../../utils";
import { mockReports } from "./mock";
import { ReporterProps } from "./types";

export async function GetReporter(): Promise<ReporterProps[]> {
   try {
      const token = GetUserTokenFromStorage();
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };

      const response = await axios.get(Connections.REPORTER + "/SoilReports", config);
      return response.data;
   } catch (error) {
      throw new Error("Erro ao gerar relatórios da Fazenda");
   }
}
