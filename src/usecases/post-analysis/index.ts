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

  Object.entries(data).forEach(([substanceID, value]) => {
    parsedAnalysis.Substances.push({
      SubstanceRegistryId: substanceID,
      Value: value,
      Timestamp: new Date(),
    });
  });

  await PostAnalysis(parsedAnalysis, true);
}
