import { ECompassRose } from "./enums";

export interface Point {
   Id: string;
   FarmId: string;
   LatitudeHours: number;
   LatitudeMinutes: number;
   LatitudeSeconds: number;
   LatitudeDirection: ECompassRose;
   LongitudeHours: number;
   LongitudeMinutes: number;
   LongitudeSeconds: number;
   LongitudeDirection: ECompassRose;
}
