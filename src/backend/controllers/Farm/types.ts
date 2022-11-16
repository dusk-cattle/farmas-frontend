import { ECompassRose } from "./enums";

interface Coordinates {
   hours: number;
   minutes: number;
   seconds: number;
   direction: number;
}

export interface Point {
   latitude: Coordinates;
   latitudeDegrees?: number;
   longitude: Coordinates;
   longitudeDegrees?: number;
}

export interface PointApi {
   centerPoint: { latitude: number, longitude: number }
   coordinates: Point[]
}
