export class SocialLinks{
    get facebook() {
        return cy.get(`[class="socials_icon icon icon-facebook"]`);
    }

    get telegram() {
        return cy.get(`[class="socials_icon icon icon-telegram"]`);
    }

    get youTube() {
        return cy.get(`[class="socials_icon icon icon-youtube"]`);
    }

    get instagram() {
        return cy.get(`[class="socials_icon icon icon-instagram"]`);
    }

    get linkedIn() {
        return cy.get(`[class="socials_icon icon icon-linkedin"]`);
    }
}