// backend
import { GetAnalysis } from '../../backend';

// models
import { ChartModel } from '../../models';

type Data = {
  farmId: string;
  id: string;
  operatorId: string;
  substance: {
    id: string;
    soilAnalysisId: string;
    substanceRegistry: {
      description: string;
      id: string;
      maxValue: number;
      method: string;
      minValue: number;
      name: string;
      unit: string;
      version: number;
    };
    substanceRegistryId: string;
    timestamp: string;
    value: number;
  }[];
  timestamp: string;
}[];

export async function getChartData(): Promise<ChartModel> {
  const data: Data = ((await GetAnalysis()) as any).data;

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
