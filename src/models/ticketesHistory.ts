import { User } from './user';
import { Flight } from './flight';

export class TicketesHistory {
    _id: string;
    flight: Flight;
    owner: User;
    buyer: User;
    constructor(ticketHistory: any) {
        this._id = ticketHistory._id || "";
        this.flight = ticketHistory.flight || new Flight({});
        this.owner = ticketHistory.owner || new User({});
        this.buyer = ticketHistory.buyer || new User({});
    }
}


