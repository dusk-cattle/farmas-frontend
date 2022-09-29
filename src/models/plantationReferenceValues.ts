import { PlantationType } from "./plantationType"
import { Substance } from "./substance"
import { SubstanceReferenceValues } from "./substanceReferenceValue"

export interface PlantationReferenceValues
{
    id:string,
    minValue:number,
    maxValue:number,
    version:number

    plantationTypeId:string,
    plantationType:PlantationType,

    substanceReferenceValuesId:string,
    substanceReferenceValues:SubstanceReferenceValues

}