describe('Locators', () => {
    beforeEach(() => {
        cy.visit('/dynamicid');
    })

    it("how to find an elemetnt by its text", () => {
        cy.xpath(`//*[text='Correct variant is']`)
            .should('contain.text', 'Correct');
    })


})