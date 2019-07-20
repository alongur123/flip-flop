export class User {
    _id: string;
    firstName: string;
    lastName: string;
    Email: string;
    Password: string;
    isAdmin: boolean;

    constructor(user: any) {
        _id: user._id || "";
        firstName: user.firstName || "";
        lastName: user.lastName || "";
        Email: user.Email || "";
        Password: user.Password || "";
        isAdmin: user.isAdmin || false;
    }
}
