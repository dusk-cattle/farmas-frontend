export interface IconProps {
  disabled?: boolean;
}

export interface WeatherApiResponse {
  weather: Weather[]
  main: Temperature
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  description: string;
  icon: string;
  temperature: Temperature
}

export interface Temperature {
  temp: number;
  pressure: number;
  humidity: number;
}