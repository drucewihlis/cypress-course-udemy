Cypress.config('defaultCommandTimeout', 16000);
describe('Retry ability demo', () => {

    // it("visit with delay", () => {
    //     cy.get(`.btn-primary`).should(
    //         'contain.text',
    //         'Delay');
    // })

    it.only("progress bar scenario", () => {
        cy.visit('/progressbar');
        cy.get('#startButton').click();
        cy.get('#progressBar', {timeout: 30000}).should('have.text', '100%');
    })

    it("client delay button", () => {
        cy.visit('/loaddelay');
        cy.get('.btn').click();
        cy.get('.bg-success').should(
            'have.text',
            'Data calculated');
    })

})