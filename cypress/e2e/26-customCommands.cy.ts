Cypress.session.clearAllSavedSessions();

describe("Basics", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}login`);
    });

    it.only("Success login scenario", () => {
        // cy.get('#userName').type('test')
        // cy.get('#password').type('Test1234*')
        // cy.get('#login').click()
        cy.login('test', 'Test1234*')
        cy.url().should('contain', 'profile')
    });

    it("Wrong use login scenario", () => {
        // cy.get('#userName').type('test')
        // cy.get('#password').type('Test1234*')
        // cy.get('#login').click()
        cy.login('incorrectuser', 'incorrectpass')
        cy.url().should('contain', 'login')
    });

})

