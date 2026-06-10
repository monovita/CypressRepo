export class LogInForm {
    get logIn() {
        return cy.get(`[class="btn btn-outline-white header_signin"]`);
    }

    get logInModal() {
        return cy.get(`[class="modal-title"]`);
    }

    get emailField() {
        return cy.get(`[id="signinEmail"]`);
    }

    get passwordField() {
        return cy.get(`[id="signinPassword"]`);
    }

    get loginButton() {
        return cy.get(`[class="btn btn-primary"]`);
    }

    get closeLogIn() {
        return cy.get(`[class="close"]`);
    }
}