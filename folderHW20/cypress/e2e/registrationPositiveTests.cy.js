import { RegistrationForm } from "../helpers/Elements/Page Objects/registrationForm";
import { Credentials } from "../helpers/Elements/Page Objects/credentials";

const registrationForm = new RegistrationForm();
const credentials = new Credentials();

function hillelAutoLogIn () {
cy.visit("/", {
        auth: {
            username: credentials.username,
            password: credentials.password,
        }
    }); 
}

describe('Registration positive test', () => {
  before(() => {
    hillelAutoLogIn();
  });  

  it('User is registered sucessfully', () => {
    registrationForm.signUpButton.click();
    registrationForm.registrationModal.should("be.visible");   
    registrationForm.nameField.type(credentials.firstName);
    registrationForm.lastNameField.type(credentials.lastName);
    registrationForm.emailField.type(credentials.userEmail);
    registrationForm.passwordField.type(credentials.userPassword);
    registrationForm.repeatPasswordField.type(credentials.userPassword);
    registrationForm.registerButton
    .should("be.visible")
    .click();
    cy.url().should('contain', 'https://qauto.forstudy.space/panel/garage');
  });
});
