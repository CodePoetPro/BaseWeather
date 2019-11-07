export interface CityWeather {
    clouds?: any;
    coord: {lon: string, lat: string};
    dt: number;
    id: number;
    main: {temp: number, pressure: number, humidity: number, temp_min: number, temp_max: number};
    name: string;
    weather: {id: number, main: string, description: string, icon: string}[];
    sys: {country: string, timezone: number, sunrise: number, sunset: number};
    visibility?: number;
    wind: {speed: number, deg?: number};
}
