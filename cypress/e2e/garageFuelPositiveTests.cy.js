import { LogInForm } from "../helpers/Elements/Page Objects/logInForm.js";
import { Credentials } from "../helpers/Elements/Page Objects/credentials.js";
import { GaragePage } from "../helpers/Elements/Page Objects/garagePage.js";
import { FuelExpenses } from "../helpers/Elements/Page Objects/fuelExpensesPage.js";
import '../support/commands.js';
import base from '../../baseConfig.js';

const logInForm = new LogInForm();
const credentials = new Credentials();
const garagePage = new GaragePage();
const fuelExpenses = new FuelExpenses();

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
    cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
    cy.url().should('contain', '/panel/garage');
  });  

  it('Car is added', () => {
    garagePage.addCarButton.click();
    garagePage.addCarModal.should("be.visible"); 
    garagePage.carBrandDropdown.select(`Porsche`);
    garagePage.carModelDropdown.select(`Cayenne`);
    garagePage.mileageField.type("10");
    garagePage.addButton.click();
    cy.get(`[class="car_name h2"]`).contains(`Porsche Cayenne`);
  });

  it('Fuel expense is added', () => {
    // here is a part about adding a car to keep the tests independent
    garagePage.addCarButton.click();
    garagePage.addCarModal.should("be.visible"); 
    garagePage.carBrandDropdown.select(`Porsche`);
    garagePage.carModelDropdown.select(`Cayenne`);
    garagePage.mileageField.type("10");
    garagePage.addButton.click();
    cy.get(`[class="car_name h2"]`).contains(`Porsche Cayenne`);
    // and here goes fuel check
    fuelExpenses.fuelPageNav.click();
    fuelExpenses.fuelPageNav.click(); 
    cy.url().should('contain', '/panel/expenses');
    fuelExpenses.carSelectDropdown.click();//;
    fuelExpenses.carItem.should('contain', `Porsche Cayenne`).last().click();
    fuelExpenses.addExpenseButton.click();
    cy.get(`[id="addExpenseMileage"]`).clear().type(`150`);
    fuelExpenses.numberOfLitersField.type(`100`);
    fuelExpenses.totalCostField.type(`150000`);
    fuelExpenses.addButton.click();
    fuelExpenses.expensesTable.should('contain', '150' && '100' && '150000');
  });
});