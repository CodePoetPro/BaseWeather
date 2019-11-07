export interface ForecastWeather {
clouds?: any;
dt: number;
dt_txt: string;
main: {temp: number, temp_min: number, temp_max: number, pressure: number, sea_level?: number, grnd_level?: number, temp_kf: number};
sys?: any;
weather: {id: number, main: string, description: string, icon: string}[]
wind: {speed: number, deg: number}
}
