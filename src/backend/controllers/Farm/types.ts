import { ECompassRose } from "./enums";

interface Coordinates {
   hours: number;
   minutes: number;
   seconds: number;
   direction: number;
}

export interface Point {
   latitude: Coordinates;
   longitude: Coordinates;
}
