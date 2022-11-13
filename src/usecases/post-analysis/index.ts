// backend
import { PostAnalysis } from "../../backend";

// models
import { Analysis } from "../../models";

interface AnalysisFromBackend {
  Substances: {
    SubstanceRegistryId: string;
    Value: number;
    Timestamp: any;
  }[];
}

export async function postAnalysis(data: Analysis): Promise<void> {
  const parsedAnalysis: AnalysisFromBackend = { Substances: [] };

  const Timestamp = data.timestamp as any;

  Object.entries(data.substances).forEach(([substanceID, value]) => {
    parsedAnalysis.Substances.push({
      SubstanceRegistryId: substanceID,
      Value: value,
      Timestamp,
    });
  });

  await PostAnalysis(parsedAnalysis, true);
}
