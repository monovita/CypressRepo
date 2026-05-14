import { MainPage } from "../helpers/Page Objects/mainPage";
import { SocialLinks } from "../helpers/Page Objects/socialLinks";
import { ContactLinks } from "../helpers/Page Objects/contactLinks";
import { Credentials } from "../helpers/Page Objects/credentials";



describe ("Links of qauto.forstudy.space", () => {
  const mainPage = new MainPage();
  const socialLinks = new SocialLinks();
  const contactLinks = new ContactLinks();
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
      mainPage.signUpButton.click();
      mainPage.registrationModal.should("be.visible");
      mainPage.closeSignUp.click();
    });

    it ("Facebook link", () => {
      socialLinks.facebook
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    });

    it("Telegram link", () => {
      socialLinks.telegram
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    });

    it("YouTube link", () => {
      socialLinks.youTube
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    });

    it("Instagram link", () => {
      socialLinks.instagram
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    });

    it("LinkedIn link", () => {
      socialLinks.linkedIn
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    })
    
    it("Hillel link", () => {
      contactLinks.hillel
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    })
    
    it("Email link", () => {
      contactLinks.supportEmail
      .should("have.attr", "href", "mailto:developer@ithillel.ua"); 
    })
  });