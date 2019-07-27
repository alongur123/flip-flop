export class User {
    _id: string;
    firstName: string;
    lastName: string;
    Password: string;
    isAdmin: boolean;

    constructor(user: any) {
        this._id = user._id || "";
        this.firstName = user.firstName || "";
        this.lastName = user.lastName || "";
        this.Password = user.Password || "";
        this.isAdmin = user.isAdmin || false;
    }
}
