import Button from "../Button";
import Input from "../Input";

export class RegistrationForm {
    get signUpButton() {
        return new Button(`[class="hero-descriptor_btn btn btn-primary"]`);
    }

    get registrationModal() {
        return cy.get(`[class="modal-title"]`);
    }

    get nameField() {
        return new Input(`[id="signupName"]`);
    }

    get lastNameField() {
        return new Input(`[id="signupLastName"]`);
    }

    get emailField() {
        return new Input(`[id="signupEmail"]`);
    }

    get passwordField() {
        return new Input(`[id="signupPassword"]`);
    }

     get repeatPasswordField() {
        return new Input(`[id="signupRepeatPassword"]`);
    }

    get registerButton() {
        return cy.get(`[class="btn btn-primary"]`);
    }

    get closeSignUp() {
        return new Button(`[class="close"]`);
    }
}