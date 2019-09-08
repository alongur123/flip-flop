export class Country {
    id: number;
    name: string;
    idNumber: number;
    constructor(country: any) {
        this.id = country.id || 0;
        this.name = country.name || "";
        this.idNumber = country.idNumber || 0;
    }

}
