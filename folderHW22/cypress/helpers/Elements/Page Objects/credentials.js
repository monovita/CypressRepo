export class Credentials {
    constructor() {
        this._username = "guest";
        this._password = "welcome2qauto";
        this._firstName = "UserFirstName";
        this._lastName = "UserLastName";
        this._userEmail = "user_email@mail.com";
        this._userPassword = "UserPassword123";
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get userEmail() {
        return this._userEmail;
    }

    get userPassword() {
        return this._userPassword;
    }
}