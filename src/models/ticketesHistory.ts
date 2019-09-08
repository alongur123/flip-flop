import { User } from './user';
import { Flight } from './flight';

export class TicketesHistory {
    id: number;
    flight: Flight;
    owner: User;
    buyer: User;
    constructor(ticketHistory: any) {
        this.id = ticketHistory.id || 0;
        this.flight = ticketHistory.flight || new Flight({});
        this.owner = ticketHistory.owner || new User({});
        this.buyer = ticketHistory.buyer || new User({});
    }
}


