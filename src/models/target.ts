import { Country } from "./country";
export class Target {
    id: number;
    cityName: string;
    country: Country;

    constructor(target: any) {
        this.id = target.id || 0;
        this.cityName = target.cityName || "";
        this.country = target.country || new Country({});
    }

}
