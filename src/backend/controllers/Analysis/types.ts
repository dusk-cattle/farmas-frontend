export interface SubstanceModelRegistry {
  SubstanceRegistryId: string;
  Value: number;
  Timestamp: Date;
}

export interface Analysis {
  Substances: SubstanceModelRegistry[];
}

// export interface AnalysisProps {
//    id: string;
//    substanceRegistryId: string;
//    soilAnalysisId: string;
//    value: number;
//    timestamp: Date;
//    substanceRegistry: SubstanceModelRegistry;
// }
export type AnalysisProps = {
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

export interface AnalysisModel {
  id: string;
  operatorId: string;
  timestamp: string;
  substance: AnalysisProps[];
}
