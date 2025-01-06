describe("Environment Variable Demo", () => {
    it("Demo", () => {
       cy.log(`Printing Env Var Value: ${Cypress.env("demoVar")}`)
    });
});