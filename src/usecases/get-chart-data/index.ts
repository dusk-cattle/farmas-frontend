// backend
import { GetAnalysis } from "../../backend";

export async function getChartData(): Promise<void> {
   const response = await GetAnalysis();

   // console.log(response);
}
