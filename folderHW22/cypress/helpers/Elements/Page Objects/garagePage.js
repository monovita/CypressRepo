export class GaragePage {
    get garagePageNav() {
        return cy.get(`[href="/panel/garage"]`);
    }

    get car(){
        return cy.get(`[class="car_name h2"]`);
    }

    get addCarButton() {
        return cy.get(`[class="btn btn-primary"]`).contains('button', 'Add car');
    }

    get addCarModal() {
        return cy.get(`[class="modal-header"]`);
    }

    get carBrandDropdown() {
        return cy.get(`[id="addCarBrand"]`);
    }

    get carModelDropdown() {
        return cy.get(`[id="addCarModel"]`);
    }

    get mileageField() {
        return cy.get(`[id="addCarMileage"]`);
    }

    get addButton() {
        return cy.get(`.modal-content .btn-primary`); 
    }

    get editCarButton() {
        return cy.get(`[class="icon icon-edit"]`);
    }

    get editModal() {
        return cy.get(`[class="modal-title"]`);
    }

    get removeCarButton() {
        return cy.get(`[class="btn btn-outline-danger"]`);
    }

    get confirmRemoveModal() {
        return cy.get(`[class="modal-title"]`);
    }

    get confirmRemoveButton() {
        return cy.get(`[class="btn btn-danger"]`);
    }
}