const nowTimestamp: number = new Date(Date.UTC(2017, 2, 14)).getTime();


describe("Viewport iteration", () => {
    beforeEach(function () {
        cy.log('date timestamp: ', nowTimestamp);
        cy.log('Check the timestamp at: http://www.timestamp-converteer.com/');
        cy.clock(nowTimestamp)
        cy.visit("https://example.cypress.io/commands/spies-stubs-clocks")
    })

    it('clock demo', function () {
        cy.get('#clock-div').click().should('have.text', "1489449600")
        cy.log("Doing the cy.tick() to add 10 sec: ").then(() => {
            cy.tick(10000); // 10 sec passed
            cy.get('#clock-div').click().should('have.text', "1489449610")
        })
    });
});
