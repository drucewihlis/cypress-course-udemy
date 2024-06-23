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

    it('find by class (middle and spaces)', () => {
        cy.xpath(`//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]`)
            // normalize-space(@class):This function removes any leading and trailing whitespace from the @class attribute value and replaces sequences of whitespace characters with a single space.
            // normalize-space(' btn btn-primary btn-test ') would result in 'btn btn-primary btn-test'.
            // concat(' ', normalize-space(@class), ' '): This concatenates three strings: A single space + The normalized class attribute value (which ensures there is no extra whitespace) + Another single space
            // This makes sure that each class name is surrounded by spaces. For example concat(' ', normalize-space('btn btn-primary btn-test'), ' ') results in ' btn btn-primary btn-test '
            .should(
            'have.css',
            'background-color',
            'rgb(0, 123, 255)');
    })
})