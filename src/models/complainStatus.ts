import { Complain } from './complain';

export class ComplainStatus {
    _id: string;
    complain: Complain;
    comments: string;

    constructor(complain: any) {
        this._id = complain._id || "";
        this.complain = complain.complain || new Complain({});
        this.comments = complain.comments || "";
    }
}
