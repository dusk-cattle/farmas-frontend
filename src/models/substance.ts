import { SoilAnalysis } from "./soilAnalysis";
import { SubstanceRegistry } from "./substanceRegistry";

export interface Substance
{
    id:string,
    value:number,
    timeStamp:TimeRanges,
    
    soilAnalysisId:string,
    soilAnalysis:SoilAnalysis,
    substanceRegistryId:string,
    substanceRegistry:SubstanceRegistry,
}