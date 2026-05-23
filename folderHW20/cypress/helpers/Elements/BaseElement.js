export default class {
    constructor (selector, text) {
        this.element = text ? cy.contains(text) : cy.get(selector);
    }

    checkText(expectedText) {
        this.element.should("have.text", expectedText);
    }
}