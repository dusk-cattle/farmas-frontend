export type AnalysisCreationProps = {
  Substances: SubstanceModelRegistry[];
};

export type SubstanceModelRegistry = {
  SubstanceRegistryId: string;
  Value: number;
  Timestamp: Date;
};

export type ProcessedAnalysis = {
  id: string;
  farmId: string;
  operatorId: string;
  timestamp: string;
  substance: Substance[];
};

type SubstanceRegistry = {
  id: string;
  name: string;
  description: string;
  maxValue: number;
  minValue: number;
  unit: string;
  method: string;
  version: number;
};

type Substance = {
  id: string;
  soilAnalysisId: string;
  substanceRegistry: SubstanceRegistry;
  substanceRegistryId: string;
  timestamp: string;
  value: number;
};
