export class Country {
    _id: string;
    name: string;
    constructor(country: any) {
        this._id = country._id || "";
        this.name = country.name || "";
    }

}
