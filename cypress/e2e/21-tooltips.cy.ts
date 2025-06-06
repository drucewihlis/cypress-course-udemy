describe("Tooltips describe", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}tool-tips`);
    });

    it("Tooltip button", () => {
        cy.get('#toolTipButton').realHover()
        // cy.get(`div[role='tooltip']`)
        cy.get(`.tooltip-inner`).should('have.text', 'You hovered over the Button')
    });

    it("A tag tooltip", () => {
        cy.contains('a', 'Contrary').realHover()
        // cy.get(`div[role='tooltip']`)
        cy.get(`.tooltip-inner`).should('have.text', 'You hovered over the Contrary')
    });


})

