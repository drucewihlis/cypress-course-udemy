describe("Drag and drop describe", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}droppable`);
    });

    it("Drag and drop Demo", () => {
        cy.get('#draggable').drag('#droppable', {force: true})
    });

})

