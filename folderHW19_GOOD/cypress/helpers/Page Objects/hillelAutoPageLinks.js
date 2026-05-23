export class HillelAutoPageLinks{
    get signUpButton() {
        return cy.get(`[class="hero-descriptor_btn btn btn-primary"]`);
    }

    get registrationModal(){
        return cy.get(`[class="modal-title"]`);
    }

    get closeSignUp() {
        return cy.get(`[class="close"]`);
    }

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
    }

    get closeLogIn() {
        return cy.get(`[class="close"]`);
    }

    get facebook() {
        return cy.get(`[class="socials_icon icon icon-facebook"]`);
    }

    get telegram() {
        return cy.get(`[class="socials_icon icon icon-telegram"]`);
    }

    get youTube() {
        return cy.get(`[class="socials_icon icon icon-youtube"]`);
    }

    get instagram() {
        return cy.get(`[class="socials_icon icon icon-instagram"]`);
    }

    get linkedIn() {
        return cy.get(`[class="socials_icon icon icon-linkedin"]`);
    }

    get hillel() {
        return cy.get(`[class="contacts_link display-4"]`);
    }

    get supportEmail() {
        return cy.contains("support@ithillel.ua");
    }
}