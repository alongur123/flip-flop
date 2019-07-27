import { User } from './user';
import * as moment from 'moment';
import { ComplainStatus } from './complainStatus.enum';

export class Complain {
    _id: string;
    user: User;
    content: string;
    date: string;
    status: ComplainStatus;
    comment: string;
    constructor(complain: any) {
        this._id = complain._id || "";
        this.user = complain.user || new User({});
        this.content = complain.content || "";
        this.date = complain.date || moment().format("DD/MM/YYYY");
        this.status = complain.status || ComplainStatus.started;
        this.comment = complain.comment || "";
    }
}
