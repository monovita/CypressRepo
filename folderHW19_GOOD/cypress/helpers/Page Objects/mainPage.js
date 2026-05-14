export class MainPage {
    get signUpButton() {
        return cy.get(`[class="hero-descriptor_btn btn btn-primary"]`);
    }

    get registrationModal(){
        return cy.get(`[class="modal-title"]`);
    }

    get closeSignUp() {
        return cy.get(`[class="close"]`);
    }
}