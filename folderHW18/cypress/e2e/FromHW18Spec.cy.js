import { faker } from "@faker-js/faker";
import { QueryingPage } from "../helpers/Page Objects/queryingPage";
import { ActionsPage } from "../helpers/Page Objects/actionsPage";

let queryingPage;
let actionsPage;

describe('Smoke', () => {
before(() => {
  console.log("before");
  queryingPage = new QueryingPage();
  actionsPage = new ActionsPage();
})

beforeEach(() => {
  console.log("beforeEach");
  cy.visit("/");
})

after(() => {
  console.log("after");
})

afterEach(() => {
  console.log("afterEach");
})

  it('Submit', () => {
    cy.contains("get").click();
    queryingPage.emailField.type(faker.internet.email());
    queryingPage.passwordField.type(faker.internet.password());
    queryingPage.submitButton.click();
  })

  it('No Submit', () => {
    cy.contains("get").click();
    queryingPage.emailField.type(faker.internet.email());
    queryingPage.passwordField.type(faker.internet.password());
  })

  it('Actions page', () => {
    cy.contains("type").click();
    actionsPage.emailField.type(faker.internet.email());
  })
})