export class User {
    id: number;
    firstName: string;
    lastName: string;
    Password: string;
    isAdmin: boolean;
    username: string;

    constructor(user: any) {
        this.id = user.id || 0;
        this.firstName = user.firstName || "";
        this.lastName = user.lastName || "";
        this.Password = user.Password || '';
        this.isAdmin = user.isAdmin || false;
        this.username = user.username || '';
    }
}
