export class Weather {
    cityName: string;
    temp: string;

    constructor(weather: any) {
        
        this.cityName = weather.cityName || '';
        this.temp = weather.temp || '';
    }
}
