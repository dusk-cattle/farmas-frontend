export interface SubstanceModelRegistry {
   SubstanceRegistryId: string;
   Value: number;
   Timestamp: Date;
}

export interface Analysis {
   Substances: SubstanceModelRegistry[];
}
