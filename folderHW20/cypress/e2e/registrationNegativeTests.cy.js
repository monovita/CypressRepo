import { RegistrationForm } from "../helpers/Elements/Page Objects/registrationForm";
import { Credentials } from "../helpers/Elements/Page Objects/credentials";

const registrationForm = new RegistrationForm();
const credentials = new Credentials();

function hillelAutoLogIn() {
cy.visit("/", {
        auth: {
            username: credentials.username,
            password: credentials.password,
        }
    });

registrationForm.signUpButton.click();
registrationForm.registrationModal.should("be.visible"); 
}

describe('Registration negative tests', () => {
  beforeEach(() => {
    hillelAutoLogIn();
  });  

  it('Invalid First Name is entered', () => {
    registrationForm.nameField.type("1").blur();
    cy.contains('Name is invalid');
    cy.contains('Name has to be from 2 to 20 characters long');
  });

  it('Null First Name is entered', () => {
    registrationForm.nameField.type("1").blur().clear();
    cy.contains('Name required');
  });

  it('Invalid Last Name is entered', () => {
    registrationForm.lastNameField.type("1").blur();
    cy.contains('Last name is invalid');
    cy.contains('Last name has to be from 2 to 20 characters long');
  });

  it('Null Last Name is entered', () => {
    registrationForm.lastNameField.type("1").blur().clear();
    cy.contains('Last name required');
  });

  it('Invalid Email is entered', () => {
    registrationForm.emailField.type("1").blur();
    cy.contains('Email is incorrect');
  });

  it('Null Email is entered', () => {
    registrationForm.emailField.type("1").blur().clear();
    cy.contains('Email required');
  });

  it('Invalid Password is entered', () => {
    registrationForm.passwordField.type("1").blur();
    cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
  });

  it('Null Password is entered', () => {
    registrationForm.passwordField.type("1").blur().clear();
    cy.contains("Password required");
  });

  it('Invalid Password is re-entered', () => {
    registrationForm.repeatPasswordField.type("1").blur();
    cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
  });

  it('Confirm Password validation', () => {
    registrationForm.passwordField.type("Test1234");
    registrationForm.repeatPasswordField.type("Test12345").blur();
    cy.contains("Passwords do not match");
  }); 

  it('Registration button is disabled', () => {
    registrationForm.nameField.type(credentials.firstName);
    registrationForm.lastNameField.type(credentials.lastName);
    registrationForm.emailField.type(credentials.userEmail);
    registrationForm.passwordField.type(credentials.userPassword);
    registrationForm.repeatPasswordField.type(credentials.userPassword).blur().clear();
    registrationForm.registerButton.should("be.disabled")
});
});