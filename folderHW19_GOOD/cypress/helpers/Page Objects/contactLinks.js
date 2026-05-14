export class ContactLinks{
    get hillel() {
        return cy.get(`[class="contacts_link display-4"]`);
    }

    get supportEmail() {
        return cy.contains("support@ithillel.ua");
    }
}