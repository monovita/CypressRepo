export class HeaderLinks{
    get hillelauto() {
        return cy.get(`[class="header_logo"]`);
    }

    get home() {
        return cy.get(`[class="btn header-link -active"]`);
    }

    get about() {
        return cy.get(`[appscrollto="aboutSection"]`);
    }

    get contacts() {
        return cy.get(`[appscrollto="contactsSection"]`);
    }

    get guestLogIn() {
        return cy.get(`[class="header-link -guest"]`);
    }

    get logIn() {
        return cy.get(`[class="btn btn-outline-white header_signin"]`);
    }

    get logInModal() {
        return cy.get(`[class="modal-title"]`);
        //return cy.get(`[class="modal-content"]`);
    }

    get closeLogIn() {
        return cy.get(`[class="close"]`);
    }
}