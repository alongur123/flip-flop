import { User } from './user';
import * as moment from 'moment';

export class Complain {
    _id: string;
    Title: string;
    user: User;
    content: string;
    date: string;
    constructor(complain: any) {
        this._id = complain._id || "";
        this.Title = complain.Title || "";
        this.user = complain.user || new User({});
        this.content = complain.content || "";
        this.date = complain.date || moment().format("DD/MM/YYYY");
    }
}
