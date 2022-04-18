describe("Log In", () => {
  it("should navigate to the log in page", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".login").click();
    cy.url().should("include", "controller=authentication&back=my-account");
  });
  it("should be able to log in", () => {
    cy.get("#email").type("m.bezymyannaya+test@gmail.com");
    cy.get("#passwd").type("FxBwgLad.2szDSj{enter}");
    cy.url().should("include", "controller=my-account");
    cy.get(".account > span").should("have.text", "Ma Bez");
  });
});
