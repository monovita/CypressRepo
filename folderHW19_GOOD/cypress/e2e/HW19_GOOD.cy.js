import { HillelAutoPageLinks } from "../helpers/Page Objects/hillelAutoPageLinks";
import { Credentials } from "../helpers/Page Objects/credentials";

describe ("Links of qauto.forstudy.space", () => {
  const hillelAutoPageLinks = new HillelAutoPageLinks();
  const credentials = new Credentials();

  beforeEach(() => {
    cy.visit("/", {
        auth: {
            username: credentials.username,
            password: credentials.password,
        }
    })
  });

    it("Sign Up button", () => {
      hillelAutoPageLinks.signUpButton.click();
      hillelAutoPageLinks.registrationModal.should("be.visible");
      hillelAutoPageLinks.closeSignUp.click();
    });

    it("hillelauto link", () => {
      hillelAutoPageLinks.hillelauto
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    });

    it("Home link", () => {
      hillelAutoPageLinks.home
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    })

    it("About link", () => {
      hillelAutoPageLinks.about
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    })

    it("Contacts link", () => {
      hillelAutoPageLinks.contacts
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    })

    it("Guest Log In", () => {
      hillelAutoPageLinks.guestLogIn
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    })

    it("Log In", () => {
      hillelAutoPageLinks.logIn.click();
      hillelAutoPageLinks.logInModal.should("be.visible");
      hillelAutoPageLinks.closeLogIn.click();
    })

    it("Facebook link", () => {
      hillelAutoPageLinks.facebook
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    });

    it("Telegram link", () => {
      hillelAutoPageLinks.telegram
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    });

    it("YouTube link", () => {
      hillelAutoPageLinks.youTube
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    });

    it("Instagram link", () => {
      hillelAutoPageLinks.instagram
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    });

    it("LinkedIn link", () => {
      hillelAutoPageLinks.linkedIn
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    })
    
    it("Hillel link", () => {
      hillelAutoPageLinks.hillel
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    })
    
    it("Email link", () => {
      hillelAutoPageLinks.supportEmail
      .should("have.attr", "href", "mailto:developer@ithillel.ua"); 
    })
  });