import { LogInForm } from "../helpers/Elements/Page Objects/logInForm.js";
import { Credentials } from "../helpers/Elements/Page Objects/credentials.js";
import { GaragePage } from "../helpers/Elements/Page Objects/garagePage.js";
import '../support/commands.js';

const logInForm = new LogInForm();
const credentials = new Credentials();
const garagePage = new GaragePage();

function hillelAutoLogIn () {
cy.visit("/", {
        auth: {
            username: credentials.username,
            password: credentials.password,
        }
    });
}

describe('LogIn positive tests', () => {
  beforeEach(() => {
    hillelAutoLogIn();
    cy.login(credentials.userEmail, credentials.userPassword);
    cy.url().should('contain', '/panel/garage');
  });  

  it('All cars are deleted', () => {
    garagePage.editCarButton.each(() => {
        garagePage.editCarButton.first().click();
        garagePage.editModal.should("be.visible");   
        garagePage.removeCarButton.click();
        garagePage.confirmRemoveModal.should("be.visible"); 
        garagePage.confirmRemoveButton.click();
        garagePage.confirmRemoveModal.should("not.be.visible"); 
    });
  });
});

    