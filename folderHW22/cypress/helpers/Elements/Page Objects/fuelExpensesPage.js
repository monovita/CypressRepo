export class FuelExpenses {
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
        return cy.get(`[class="btn btn-primary"]`);
    }

    get addExpenseModal() {
        return cy.get(`[class="modal-header"]`);
    }

    get vehicleDropDown() {
        return cy.get(`[id="addExpenseCar"]`);
    }

    get reportDateField() {
        return cy.get(`[id="addExpenseDate"]`);
    }

    get mileageField() {
        return cy.get(`[id="addExpenseMileage"]`);
    }

    get numberOfLitersField() {
        return cy.get(`[id="addExpenseLiters"]`);
    }

    get totalCostField() {
        return cy.get(`[id="addExpenseTotalCost"]`);
    }

    get expensesTable() {
        return cy.get(`[class="table expenses_table"]`);
    }

    get addButton() {
        return cy.get(`[type="button"]`).contains('button', 'Add'); 
    }

}