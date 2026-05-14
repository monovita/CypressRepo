describe ("Links", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
        auth: {
            username: "guest",
            password: "welcome2qauto",
        }
    })
  })

    it ("Sign Up button", () => {
      cy.get(`[class="hero-descriptor_btn btn btn-primary"]`).click()
      cy.get(`[class="close"]`).click();
    });

    it ("Facebook link", () => {
      cy.get(`[class="socials_icon icon icon-facebook"]`).click();
    })
    
    it("Telegram link", () => {
      cy.get(`[class="socials_icon icon icon-telegram"]`).click();
    })
    
    it("YouTube link", () => {
      cy.get(`[class="socials_icon icon icon-youtube"]`).click();
    });

    it("Instagram link", () => {
      cy.get(`[class="socials_icon icon icon-instagram"]`).click();
    });
    
    it("LinkedIn link", () => {
      cy.get(`[class="socials_icon icon icon-linkedin"]`).click();
    })
    
    it("Hillel link", () => {
      cy.get(`[class="contacts_link display-4"]`).click();
    })
    
    it("Email link", () => {
      cy.contains("support@ithillel.ua")
      .should("have.attr", "href", "mailto:developer@ithillel.ua"); 
    })
    });
