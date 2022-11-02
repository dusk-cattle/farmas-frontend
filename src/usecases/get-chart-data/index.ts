// backend
import { GetAnalysis } from '../../backend';

// models
import { ChartModel } from '../../models';

export async function getChartData(): Promise<ChartModel> {
  const data = await GetAnalysis();

  const chartData: ChartModel = {};

  data.forEach((value) => {
    value.substance.forEach((substance) => {
      if (!chartData[substance.substanceRegistry.name])
        chartData[substance.substanceRegistry.name] = [];

      chartData[substance.substanceRegistry.name].push([
        new Date(substance.timestamp).getTime(),
        substance.value,
      ]);
    });
  });

  return chartData;
}
