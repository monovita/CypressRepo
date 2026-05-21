import { LogInForm } from "../helpers/Elements/Page Objects/logInForm.js";
import { Credentials } from "../helpers/Elements/Page Objects/credentials.js";
import '../support/commands.js';

const logInForm = new LogInForm();
const credentials = new Credentials();

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
  });  

  it('User is logedIn', () => {
    cy.login(credentials.userEmail, credentials.userPassword);
    cy.url().should('contain', 'https://qauto.forstudy.space/panel/garage');
  });
});