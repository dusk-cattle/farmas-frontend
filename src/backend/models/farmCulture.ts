import { Farm } from "./farm";
import { PlantationType } from "./plantationType";


export interface FarmCulture
{
    id:string,
    version:number,

    farmId:string,
    farm:Farm
    plantationTypeId:string,
    plantationType:PlantationType
}