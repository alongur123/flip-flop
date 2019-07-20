import { Country } from "./country";
export class Target {
    _id: string;
    cityName: string;
    country: Country;

    constructor(target: any) {
        this._id = target._id || "";
        this.cityName = target.cityName || "";
        this.country = target.country || new Country({});
    }

}
