// backend
import { PostAnalysis } from '../../backend';

// models
import { Analisys } from '../../models';

interface AnalysisFromBackend {
  Substances: {
    SubstanceRegistryId: string;
    Value: number;
    Timestamp: Date;
  }[];
}

export async function postAnalysis(data: Analisys): Promise<void> {
  const parsedAnalysis: AnalysisFromBackend = { Substances: [] };

  const Timestamp = new Date();

  Object.entries(data).forEach(([substanceID, value]) => {
    parsedAnalysis.Substances.push({
      SubstanceRegistryId: substanceID,
      Value: value,
      Timestamp,
    });
  });

  await PostAnalysis(parsedAnalysis, true);
}
