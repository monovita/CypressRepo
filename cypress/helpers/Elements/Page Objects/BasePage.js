export default class {
    _url;
     constructor(url) {
        this._url = url;
     }

     navigate() {
        cy.visit(this._url);
     }

     containUrlCheck(expectedUrl) {
        cy.url().should("contain", expectedUrl);
     }
}