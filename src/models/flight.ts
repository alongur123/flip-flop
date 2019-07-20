import { Target } from './target';
import { Department } from './department.enum';
import * as moment from 'moment';

export class Flight {
    _id: string;
    date: Date;
    FlightNumber: number;
    cancelFee: number;
    Food: boolean;
    Baggage: boolean;
    department: string;
    Price: number;
    target: Target;
    IsSold: boolean;
    constructor(flight: any) {
        this._id = flight._id || "";
        this.date = flight.date || moment().format("DD/MM/YYYY");
        this.FlightNumber = flight.FlightNumber || "";
        this.cancelFee = flight.cancelFee || 0;
        this.Food = flight.Food || false;
        this.Baggage = flight.Baggage || false;
        this.department = flight.department || Department.businessClass;
        this.Price = flight.Price || 0;
        this.target = flight.target || new Target({});
        this.IsSold = flight.IsSold || false;
    }

}
