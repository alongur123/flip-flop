export class Country {
    _id: string;
    name: string;
    idNumber: number;
    constructor(country: any) {
        this._id = country._id || "";
        this.name = country.name || "";
        this.idNumber = country.idNumber || 0;
    }

}
