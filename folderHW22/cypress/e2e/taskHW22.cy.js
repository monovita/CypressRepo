import { LogInForm } from "../helpers/Elements/Page Objects/logInForm.js";
import { Credentials } from "../helpers/Elements/Page Objects/credentials.js";
import { GaragePage } from "../helpers/Elements/Page Objects/garagePage.js";
import { FuelExpenses } from "../helpers/Elements/Page Objects/fuelExpensesPage.js";
import '../support/commands.js';

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
    cy.login(credentials.userEmail, credentials.userPassword);
    cy.url().should('contain', '/panel/garage');
  });  

   // Step 1 -- car is added via UI
  it('Car is added with saved id', () => {
    cy.intercept('POST', '/api/cars').as('addCar');

    garagePage.addCarButton.click();
    garagePage.addCarModal.should("be.visible"); 
    garagePage.carBrandDropdown.select(`Porsche`);
    garagePage.carModelDropdown.select(`Cayenne`);
    garagePage.mileageField.type("101");
    garagePage.addButton.click();

   // Step 2 -- checking that POST returned 201
   cy.wait('@addCar').then( ({ response }) => {
   cy.get('@addCar').its('response.statusCode').should('eq', 201);
   // Step 2.1 -- car id is saved, and returned by GET 
   const carId = response.body.data.id;
   console.log(carId);
   cy.request('GET', '/api/cars',).then((response) => {
    console.log(response);
    let isExist;
    response.body.data.forEach((car) => {
      if (car.id === carId) {
        isExist = true;
      }
    });
    expect(isExist).to.eq(true);

    // Step 3 -- for the created car id adding a fuel expence via API, and checking it by parameters
    cy.request('POST', 'api/expenses', 
      { "carId": carId,
        "reportedAt": "2026-06-05",
        "mileage": 111,
        "liters": 11,
        "totalCost": 30,
        "forceMileage": false
      }).then((response) => {
          expect(response.body.data).to.have.property('carId', carId);
        });

    // Step 4  -- check via UI that the specified car has the added expence ?? there is no car ID on UI :(
   fuelExpenses.fuelPageNav.click(); 
   cy.url().should('contain', '/panel/expenses');
   fuelExpenses.carSelectDropdown.click();//;
   fuelExpenses.carItem.should('contain', `Porsche Cayenne`).last().click();
   fuelExpenses.expensesTable.should('contain', '111' && '11' && '30');
   });
  });
});
});