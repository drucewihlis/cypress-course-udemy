describe('Locators', () => {
    beforeEach(() => {
        cy.visit('/classattr');
    })

    it("how to find an elemetnt by its text", () => {
        cy.xpath(`//*[text()='Correct variant is']`).should(
            'contain.text',
            'Correct');
    })

    it('find an element by its attr using xpath', () => {
        cy.xpath(`//pre[@class=' language-html']`).should(
            'contain.text',
            'button');
    })

})