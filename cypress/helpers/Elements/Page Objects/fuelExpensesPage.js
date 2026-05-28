import BasePage from "./BasePage";
import Button from "../Button";
import Input from "../Input";

export class FuelExpenses extends BasePage {
    get fuelPageNav() {
        return cy.get(`[routerlink="expenses"]`); 
    }

    get carSelectDropdown() {
        return cy.get(`[id="carSelectDropdown"]`);
    }

    get carItem() {
        return cy.get(`[class="dropdown-item btn btn-link car-select-dropdown_item"`).not('[disabled]');
    }

    get addExpenseButton() {
        return new Button (`[class="btn btn-primary"]`);
    }

    get addExpenseModal() {
        return cy.get(`[class="modal-header"]`);
    }

    get vehicleDropDown() {
        return cy.get(`[id="addExpenseCar"]`);
    }

    get reportDateField() {
        return new Input(`[id="addExpenseDate"]`);
    }

    get mileageField() {
        return new Input (`[id="addExpenseMileage"]`);
    }

    get numberOfLitersField() {
        return new Input (`[id="addExpenseLiters"]`);
    }

    get totalCostField() {
        return new Input(`[id="addExpenseTotalCost"]`);
    }

    get expensesTable() {
        return cy.get(`[class="table expenses_table"]`);
    }

    get addButton() {
        return cy.get(`[type="button"]`).contains('button', 'Add'); 
    }

}