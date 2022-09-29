import { Substance } from "./substance"

export interface SoilAnalysis
{
    id:string,
    substanceId:string,
    //soilRegistryId:string,
    //soilRegistry:SoilRegistry
    //operator
    timeStamp:TimeRanges,
    version:number
    substance:Substance
}