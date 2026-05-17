export class Credentials {
    constructor() {
        this._username = "guest";
        this._password = "welcome2qauto";
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }
}