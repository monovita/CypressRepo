import BasePage from "./BasePage";
import Button from "../Button";
import Input from "../Input";

export class GaragePage extends BasePage {
    get garagePageNav() {
        return cy.get(`[href="/panel/garage"]`);
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
        return new Input (`[id="addCarMileage"]`);
    }

    get addButton() {
        return cy.get(`[type="button"]`).contains('button', 'Add'); 
    }
}