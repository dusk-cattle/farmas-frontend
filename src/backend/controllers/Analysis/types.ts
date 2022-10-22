export interface SubstanceModelRegistry {
   SubstanceRegistryId: string;
   Value: number;
   Timestamp: Date;
}

export interface Analysis {
   Substances: SubstanceModelRegistry[];
}

export interface AnalysisProps {
   id: string;
   substanceRegistryId: string;
   soilAnalysisId: string;
   value: number;
   timestamp: Date;
   substanceRegistry: SubstanceModelRegistry;
}

export interface AnalysisModel {
   id: string;
   operatorId: string;
   timestamp: string;
   substance: AnalysisProps[];
}
