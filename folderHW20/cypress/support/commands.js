import { LogInForm } from "../helpers/Elements/Page Objects/logInForm";

const logInForm = new LogInForm();

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
});

Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  console.log(`Visiting ${Cypress.config("baseUrl")}${url}`);
  return originalFn(url, options);
});

Cypress.Commands.add('login', (username, password) => {
  logInForm.logIn.click();
  logInForm.emailField.type(username);
  logInForm.passwordField.type(password, { sensitive: true });
  logInForm.loginButton.click();
});
